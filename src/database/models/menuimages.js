'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class MenuImages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            this.belongsTo(models.Menus, {
                foreignKey: 'menuId',
                as: 'menu'
            });

            this.belongsTo(models.User, {
                foreignKey: 'imageId',
                as: 'image'
            });
        }
    }

    MenuImages.init({
        menuId: DataTypes.INTEGER,
        imageId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'MenuImages',
    });
    return MenuImages;
};