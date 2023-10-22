'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Users', [{
            firstName: 'User',
            lastName: 'Default',
            email: 'userDefault@example.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            ra: null,
            photoProfile: null,
            userTypeId: 1,
            lastAccess: new Date()
        }, {
            firstName: 'Admin',
            lastName: 'Default',
            email: 'adminDefault@example.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            ra: null,
            photoProfile: null,
            userTypeId: 2,
            lastAccess: new Date()
        }, {
            firstName: 'SuperAdmin',
            lastName: 'Default',
            email: 'superAdminDefault@example.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            ra: null,
            photoProfile: null,
            userTypeId: 2,
            lastAccess: new Date()
        }]);
    },

    async down(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('Users', null, {truncate: true});
    }
};