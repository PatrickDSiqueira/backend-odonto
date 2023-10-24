const MenusRepository = require('../repositories/MenusRepository')

class MenusService {

    async getAllMenus() {

        const data = await MenusRepository.getFatherWithChild();

        return {
            status: 202,
            data
        };
    }
}

module.exports = new MenusService();