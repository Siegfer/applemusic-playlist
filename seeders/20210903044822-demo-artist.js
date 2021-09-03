'use strict'
const faker = require('faker')

const seedArray = []
for (let i = 0; i < 10; i++) {
	const newObj = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		bio: faker.lorem.word(),
		city: faker.address.city(),
		state: faker.address.state(),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	}
	seedArray.push(newObj)
}

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Artists', seedArray, {})

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
		await queryInterface.bulkDelete('Artists', null, {})
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
}
