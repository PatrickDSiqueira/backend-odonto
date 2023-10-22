const AuthenticationController = require('../controllers/AuthenticationController')

module.exports = function (application) {

    application.post('/login', AuthenticationController.validate);
}