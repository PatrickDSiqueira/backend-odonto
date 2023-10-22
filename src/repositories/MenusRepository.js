const {Menus} = require('../database/models')

class MenusRepository {

    async getAll() {

        return await Menus.findAll();
    }
}

module.exports = new MenusRepository();