const MenusService = require('../services/MenusService')

class MenusController {

    async index(req, res) {

        try {

            const result = await MenusService.getAllMenus();
            return res.status(result.status).json(result.data)

        } catch (e) {

            console.log(e);

            return res.status(500).json({
                error: 'Internal error',
                message: e.message
            })
        }
    }
}

module.exports = new MenusController();