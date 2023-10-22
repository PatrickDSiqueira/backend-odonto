const MenusRepository = require('../repositories/MenusRepository')

class MenusService {

    async getAllMenus() {

        const menuList = await MenusRepository.getAll();
        console.log(typeof menuList)

        let data = [];

        for (const menuListElement of menuList) {

            data.push({
                id : menuListElement.id,
                title : menuListElement.title,
                icon: menuListElement.iconUrl
            })
        }

        return {
            status: 202,
            data
        };
    }
}

module.exports = new MenusService();