const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
	console.log(`Sever is running on PORT`, PORT)
})
