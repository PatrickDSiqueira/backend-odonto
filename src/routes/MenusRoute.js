const MenusController = require('../controllers/MenusController')
const AuthMiddleware = require('../middleware/AuthMiddleware')

module.exports = function (application) {

    application.get('/menus', AuthMiddleware, MenusController.index);
}