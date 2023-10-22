'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('MenuImages', [
            {
                menuId: 4,
                imageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                menuId: 4,
                imageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                menuId: 4,
                imageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                menuId: 4,
                imageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                menuId: 4,
                imageId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('MenuImages', null, {truncate: true});
    }
};
