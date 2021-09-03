const { User, Artist, Album, Song, Playlist } = require('./models')

addAlbumToArtist = async () => {
	//get the first artist
	const foundArtist = await Artist.findOne({
		where: { id: 1 }
	})
	console.log(foundArtist.toJSON())

	//get the first artist
	const foundAlbum = await Album.findOne({
		where: { id: 1 }
	})
	console.log(foundAlbum.toJSON())

	//add album => artist
	// able to use addalbum is due to previous association
	let result = await foundArtist.addAlbum(foundAlbum)
	console.log(result)
}
addAlbumToArtist()
