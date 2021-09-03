'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			/*
      with belongsToMany() association, 
      need a through: modelname, (name of the model storing connections)
      {foreignKey: nameId} must match models.Name outside()
      */
			models.User.belongsToMany(models.Song, {
				through: 'Playlist',
				foreignKey: 'userId'
			})
		}
	}
	User.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'User'
		}
	)
	return User
}
