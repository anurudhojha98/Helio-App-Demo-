
var authService = require('../services').authService;

module.exports = (app,router) => {
     
    router.post('/signup', authService.signup);

    router.post('/login', authService.login);

    router.post('/resetPassword', authService.resetPassword);
    
    app.use('/auth',router)
}