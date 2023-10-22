const UserRepository = require('../repositories/UserRepository')

class UserService {
    /**
     * Função para criar um usuário comum.
     */
    async registerDefaultUser(firstName, lastName, email, password, confirmPassword, ra = null, photoProfile = null) {

        if (!firstName || !lastName || !email || !password || !confirmPassword) {

            return {
                status: 400,
                data: 'Existe campos obrigátorios a serem preenchidos'
            }
        }

        if(password !== confirmPassword){

            return {
                status: 400,
                data: 'A senha e a confimação não correspondem'
            }
        }

        const user = await UserRepository.saveNewDefaultUser(firstName, lastName, email, ra, photoProfile, password);

        return {
            status: 200,
            data: await user
        }
    }
}

module.exports = new UserService();