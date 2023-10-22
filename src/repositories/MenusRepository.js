const {Menus} = require('../database/models')

class MenusRepository {

    async getAll() {

        const allMenus = await Menus.findAll();

        return {
            status: 202,
            data: allMenus
        }
    }
}

module.exports = new MenusRepository();