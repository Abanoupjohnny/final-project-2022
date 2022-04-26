const userModel = require('../models/user.model')
class User{
    static register = async (req,res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: 'done register ...'
            })
        } catch (error) {
            res.status(500).send({
                apiStatus: false,
                data: error,
                message: error.message
            })
        }
    }

}

module.exports = User