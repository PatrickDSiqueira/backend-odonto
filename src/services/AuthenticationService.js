const { secret, expiresIn } = require('../jwt/Auth');
const UserRepository = require('../repositories/UserRepository')
const jwt = require("jsonwebtoken")

class AuthenticationService {
    /**
     * Função para autenticacao de credênciais de usuário para login.
     */
    async authenticationEmailPassword(email, password) {

        if ( !email || !password) {

            return {
                status: 400,
                data: 'E-mail ou senha inválido.'
            }
        }

        const user = await UserRepository.getUserByEmail(email);

        if(!user) {
            return {
                status: 404,
                data: 'Usuário não cadastrado.'
            }
        }

        if(password !== user.password) {
            return {
                status: 400,
                data: 'Senha inválida.'
            } 
        }

        const payload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            ra: user.ra
        }

        const token = jwt.sign(payload, secret, {expiresIn})

        return {
            status: 200,
            data: token
        }
    }
}

module.exports = new AuthenticationService();