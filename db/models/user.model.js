const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const userSchema = mongoose.Schema({
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            validate(value){
                if (!validator.isMobilePhone(value, ['ar-EG']))
                throw new Error("invalid phone format")
            }
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        role: [
            "admin",
            "user",
            {
                required: true,
            }
        ],
        tokens: [
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]
    }
)

userSchema.pre('save', async function(){
    const data = this
    if(data.isModified("password"))
    data.password = await bcryptjs.hash(data.password, 10)
})

userSchema.statics.login = async(email, password) => {
    const user = await User.findOne({email})
    if (!user) throw new Error ("Wrong Email")
    const matched = await bcryptjs.compare(password, user.password)
    if (!matched) throw new Error ("Wrong Password")
    token = jwt.sign({ sub: user.id, role: user.role }, config.secret)
    return user
}

userSchema.methods.generateToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id} , process.env.JWT_SECRET_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User = mongoose.model('User', userSchema)
module.exports = User