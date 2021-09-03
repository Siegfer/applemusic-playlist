'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Song extends Model {
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
			models.Song.belongsTo(models.Album, { foreignKey: albumId })
			/*
      with belongsToMany() association, 
      need a through: modelname, (name of the model storing connections)
      {foreignKey: nameId} must match models.Name outside()
      */
			models.Song.belongsToMany(models.User, {
				through: Playlist,
				foreignKey: songId
			})
		}
	}
	Song.init(
		{
			title: DataTypes.STRING,
			duration: DataTypes.INTEGER,
			plays: DataTypes.INTEGER
		},
		{
			sequelize,
			modelName: 'Song'
		}
	)
	return Song
}
