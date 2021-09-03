'use strict'
const faker = require('faker')

const seedArray = []
for (let i = 0; i < 1000; i++) {
	const newObj = {
		title: faker.random.words(),
		duration: faker.datatype.number(),
		plays: faker.datatype.number(),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	}
	seedArray.push(newObj)
}

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Songs', seedArray, {})

		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Songs', null, {})
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
}
