'use strict';
const {Images} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Images', [{
            title: 'Sutura intermaxilar',
            description: 'também chamda de sutura mediana, é a sutura presente enre osdois processos palatinos da maxila.',
            url: 'https://firebasestorage.googleapis.com/v0/b/backend-radiologia.appspot.com/o/raio-x.png?alt=media&token=d94e231b-9d97-4499-8fb1-515fab3dbf2d&_gl=1*1145q4j*_ga*MTU3NTUyNTE1MC4xNjg5MDM3NTAx*_ga_CW55HF8NVT*MTY5Nzk5NjQxNi41Ni4xLjE2OTc5OTY2MzcuNTMuMC4w',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Images', null, {truncate: true});
    }
};
