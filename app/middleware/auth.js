const jwt = require('jsonwebtoken')
const User = require('../../db/models/user.model')

const auth = async (req, res, next) => {
    try {
        const token = req.headers('Authorization').replace('bearar', '')
        const decode = jwt.verify(token , process.env.JWT_SECRET_KEY)
        const user = await User.findOne({_id: decode._id, 'tokens.token': token})
        if (!user) throw new Error('User Not Found')
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            message: 'unauthorized',
            data: e.message
        })
    }
}
module.exports = auth