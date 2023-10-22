'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            this.belongsTo(models.UserTypes, {
                foreignKey: 'userTypeId',
                as: 'userType'
            });
        }
    }

    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        ra: DataTypes.STRING,
        photoProfile: DataTypes.STRING,
        userTypeId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};