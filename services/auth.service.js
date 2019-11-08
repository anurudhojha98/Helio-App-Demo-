var userRepository = require('../db/repositories/UserRepository');

module.exports = {
    registerUser() {
        userRepository.user_signup();
        return true;
    },
    loginUser() {
        userRepository.user_login();
        return true;
    },
    resetPwd() {
        userRepository.reset_password();
        return true;
    }
};