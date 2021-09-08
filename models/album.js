/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable strict */
// eslint-disable-next-line semi

'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Album extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			/*
			with belongsTo() association, 
			models.name must match {foreignKey: nameId} inside()
			*/
			models.Album.belongsTo(models.Artist, { foreignKey: 'artistId' })
			/*
			with hasMany() association, 
			{foreignKey: nameId} must match models outside ()
			*/
			models.Album.hasMany(models.Song, { foreignKey: 'albumId' })
		}
	}
	Album.init(
		{
			name: DataTypes.STRING,
			lable: DataTypes.STRING,
			genre: DataTypes.STRING,
			releaseYear: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'Album'
		}
	)
	return Album
}
