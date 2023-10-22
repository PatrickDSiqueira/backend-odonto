const MenusRepository = require('../repositories/MenusRepository')

class MenusService {

    async getAllMenus() {

        return MenusRepository.getAll();
    }
}

module.exports = new MenusService();