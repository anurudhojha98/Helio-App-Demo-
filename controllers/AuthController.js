module.exports = {
    signup(req, res) {
        return res.status(200).send("User signup successfully");
    },
    login(req, res) {
        return res.status(200).send("User login successfully");
    },
    resetPassword(req,res){
        return res.status(200).send("Reset password succefully");
    }
};