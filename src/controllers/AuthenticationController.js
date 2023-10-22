const AuthenticationService = require('../services/AuthenticationService')

class AuthenticationController {

    async validate(req, res) {

        try {

            const {email, password} = req.body;

            const result = await AuthenticationService.authenticationEmailPassword(email, password);
            return res.status(result.status).json(result.data)

        } catch (e) {

            console.log(e.message);

            return res.status(500).json({
                error: 'Internal error',
                message: e.message
            })
        }
    }
}

module.exports = new AuthenticationController();