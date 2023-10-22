const MenusController = require('../controllers/MenusController')

module.exports = function (application) {

    application.get('/menus', MenusController.index);
}