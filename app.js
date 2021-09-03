const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

//database
const { Song, Artist, User, Album } = require('./models')

app.get('/', (req, res) => {
	res.send('Music App')
})

// app.get('/:artist/songs', async (req, res) => {
// 	let artist = req.params.artist
// 	let fetchArtist = await Artist.findOne({
// 		where: { name: artist },
// 		include: [Song]
// 	})
// 	const albums = fetchArtist.Albums
// 	console.log(albums)
// })

app.get('/:artist/albums', async (req, res) => {
	let artist = req.params.artist
	let fetchArtist = await Artist.findOne({
		where: { name: artist },
		include: [Album]
	})
	const albums = fetchArtist.Albums
})
// want one album and then all songs => get album
app.get('/:artist/:albums', async (req, res) => {
	let artist = req.params.artist
	let albumInput = req.params.album

	let fetchArtist = await Artist.findOne({
		where: { name: artist },
		include: [Album]
	})

	const albums = fetchArtist.Albums

	let filterAlbums = albums.filter((alb) => {
		// parse clean album
		alb = alb.toJSON()
		if (alb.name === albumInput) {
			return true
		}
	})

	// get album out of array => there is only one album
	let fetchAlbum = filterAlbums[0]

	let songs = fetchAlbum.getSongs()
	console.log(songs)
})

app.get('/:artist/albums/songs', async (req, res) => {
	let artist = req.params.artist

	let fetchArtist = await Artist.findOne({
		where: { name: artist },
		include: [Album, Song]
	})
	const albums = fetchArtist.Albums
	const songs = fetchArtist.Songs
	console.log()
})

app.listen(PORT, () => {
	console.log(`Sever is running on PORT`, PORT)
})
