const UserController = require('../controllers/UserController')

module.exports = function (application) {

    application.post('/user/register', UserController.create);
}