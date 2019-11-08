
var authController = require('../controllers/AuthController');

module.exports = (app, router) => {

    router.post('/signup', authController.signup);

    router.post('/login', authController.login);

    router.post('/reset-password', authController.resetPassword);

    app.use('/auth', router)
}