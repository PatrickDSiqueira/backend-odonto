'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('UserTypes', [
            {
                typeName: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeName: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeName: 'super_admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserTypes', null, {truncate: true});
    }
};