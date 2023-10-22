const UserRepository = require('../repositories/UserRepository')

class UserService {
    /**
     * Função para criar um usuário comum.
     */
    async registerDefaultUser(firstName, lastName, email, ra = null, photoProfile = null) {

        if (!firstName || !lastName || !email) {

            return {
                status: 400,
                data: 'Existe campos obrigátorios a serem preenchidos'
            }
        }

        const user = await UserRepository.saveNewDefaultUser(firstName, lastName, email, ra, photoProfile);

        return {
            status: 200,
            data: await user
        }
    }
}

module.exports = new UserService();