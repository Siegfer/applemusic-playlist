'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Artist extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			/*
      with hasMany() association, 
      {foreignKey: nameId} must match models outside ()
      */
			models.Artist.hasMany(models.Album, { foreignKey: artistId })
		}
	}
	Artist.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			bio: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'Artist'
		}
	)
	return Artist
}
