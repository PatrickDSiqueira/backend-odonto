const {User} = require('../database/models')

class UserRepository {

    /**
     *
     * @param firstName
     * @param lastName
     * @param email
     * @param ra
     * @param photoProfile
     * @param password
     * @returns {Promise<Model<any, TModelAttributes>>}
     */

    async saveNewDefaultUser(firstName, lastName, email, ra, photoProfile, password) {

        return await User.create({
            firstName,
            lastName,
            email,
            ra,
            photoProfile,
            password,
            userTypeId: 1,
            lastAccess: new Date()
        });
    }

    async getUserByEmail(email) {
        return await User.findOne({
            where:  {
                email: email 
            }
        })
    }
}

module.exports = new UserRepository();