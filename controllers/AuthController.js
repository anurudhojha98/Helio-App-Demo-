
var authService = require('../services').authService;
module.exports = {
    signup(req, res) {
        authService.registerUser();
        return res.status(200).send("User signup succefully.")
    },
    login(req, res) {
        authService.loginUser();
        return res.status(200).send("User login succefully.")
    },
    resetPassword(req, res) {
        authService.resetPwd();
        return res.status(200).send("Password reset succefully.")
    }

}