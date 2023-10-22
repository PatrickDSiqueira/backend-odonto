const UserService = require('../services/UserService')

class UserController {

    async create(req, res) {

        try {

            const {first_name, last_name, email, ra, photo_profile} = req.body;

            const result = await UserService.registerDefaultUser(first_name, last_name, email, ra, photo_profile);
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

module.exports = new UserController();