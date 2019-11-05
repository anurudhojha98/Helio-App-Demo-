
var authController = require('../controllers').authController;

module.exports = (app,router) => {
     
    router.post('/signup', authController.signup);

    router.post('/login', authController.login);

    router.post('/resetPassword', authController.resetPassword);
    
    app.use('/auth',router)
}