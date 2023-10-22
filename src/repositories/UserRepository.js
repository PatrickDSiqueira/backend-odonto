const {User} = require('../database/models')

class UserRepository {

    /**
     *
     * @param firstName
     * @param lastName
     * @param email
     * @param ra
     * @param photoProfile
     * @returns {Promise<Model<any, TModelAttributes>>}
     */

    async saveNewDefaultUser(firstName, lastName, email, ra, photoProfile) {

        return await User.create({
            firstName,
            lastName,
            email,
            ra,
            photoProfile,
            userTypeId: 1,
            lastAccess: new Date()
        });
    }
}

module.exports = new UserRepository();