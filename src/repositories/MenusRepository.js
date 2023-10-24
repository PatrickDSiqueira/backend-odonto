const {Menus, MenuImages, Images} = require('../database/models')

class MenusRepository {

    async getFatherWithChild(fatherId = null) {

        const menus = await Menus.findAll({where: {fatherId}});

        const result = [];

        for (const menu of menus) {

            const children = await this.getFatherWithChild(menu.id);

            const images = [];

            if (!children.length) {

                images.push(await this.getImagesOfMenu(menu))
            }

            result.push({
                id: menu.id,
                title: menu.title,
                icon: menu.iconUrl,
                children,
                images
            })
        }
        return result;
    }

    async getImagesOfMenu(menu) {

        const imageIds = await MenuImages.findAll({
            where: {menuId: menu.id},
            attributes: ['imageId']
        });

        console.log(await Images.findAll())

        return imageIds;
    }
}

module.exports = new MenusRepository();