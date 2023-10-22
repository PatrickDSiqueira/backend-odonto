'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Menus', [
            {
              title: 'Anatomia',
                description: null,
                fatherId: null,
                iconUrl: 'https://firebasestorage.googleapis.com/v0/b/backend-radiologia.appspot.com/o/raio-x.png?alt=media&token=d94e231b-9d97-4499-8fb1-515fab3dbf2d&_gl=1*1145q4j*_ga*MTU3NTUyNTE1MC4xNjg5MDM3NTAx*_ga_CW55HF8NVT*MTY5Nzk5NjQxNi41Ni4xLjE2OTc5OTY2MzcuNTMuMC4w',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Patologia',
                description: null,
                fatherId: null,
                iconUrl: 'https://firebasestorage.googleapis.com/v0/b/backend-radiologia.appspot.com/o/raio-x.png?alt=media&token=d94e231b-9d97-4499-8fb1-515fab3dbf2d&_gl=1*1145q4j*_ga*MTU3NTUyNTE1MC4xNjg5MDM3NTAx*_ga_CW55HF8NVT*MTY5Nzk5NjQxNi41Ni4xLjE2OTc5OTY2MzcuNTMuMC4w',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                title: 'Alterações Dentárias',
                description: null,
                fatherId: null,
                iconUrl: 'https://firebasestorage.googleapis.com/v0/b/backend-radiologia.appspot.com/o/raio-x.png?alt=media&token=d94e231b-9d97-4499-8fb1-515fab3dbf2d&_gl=1*1145q4j*_ga*MTU3NTUyNTE1MC4xNjg5MDM3NTAx*_ga_CW55HF8NVT*MTY5Nzk5NjQxNi41Ni4xLjE2OTc5OTY2MzcuNTMuMC4w',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                title: 'Maxila',
                description: null,
                fatherId: 1,
                iconUrl: 'https://firebasestorage.googleapis.com/v0/b/backend-radiologia.appspot.com/o/raio-x.png?alt=media&token=d94e231b-9d97-4499-8fb1-515fab3dbf2d&_gl=1*1145q4j*_ga*MTU3NTUyNTE1MC4xNjg5MDM3NTAx*_ga_CW55HF8NVT*MTY5Nzk5NjQxNi41Ni4xLjE2OTc5OTY2MzcuNTMuMC4w',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                title: 'Mandíbula',
                description: null,
                fatherId: 1,
                iconUrl: 'https://firebasestorage.googleapis.com/v0/b/backend-radiologia.appspot.com/o/raio-x.png?alt=media&token=d94e231b-9d97-4499-8fb1-515fab3dbf2d&_gl=1*1145q4j*_ga*MTU3NTUyNTE1MC4xNjg5MDM3NTAx*_ga_CW55HF8NVT*MTY5Nzk5NjQxNi41Ni4xLjE2OTc5OTY2MzcuNTMuMC4w',
                createdAt: new Date(),
                updatedAt: new Date()
            }]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Menus', null, {truncate: true});
    }
};
