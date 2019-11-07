var userRepository=require('../db/repositories/UserRepository');

module.exports = {
    signup(req, res) {
        userRepository.user_signup();
        return res.status(200).send("User signup successfully");
    },
    login(req, res) {
        userRepository.user_login();
        return res.status(200).send("User login successfully");
    },
    resetPassword(req,res){
        userRepository.reset_password();
        return res.status(200).send("Reset password succefully");
    }
};