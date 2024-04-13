const {Schema, model} = require('mongoose')
const {createHmac, randomBytes} = require('crypto')
const {createAccessToken,verifyToken} = require('../services/authentication')

const UserSchema = new Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique  : true
    },
    mobile : {
        type : String,
        required : true,
    },
    salt : {
        type : String,
    },
    password : {
        type : String,
        required : true
    },
    profileImage : {
        type : String,
        default : 'default.png'
    },
    role : {
        type : String,
        enum : ["USER","ADMIN"],
        default : "USER"
    }

},
{
    timestamps : true
})

UserSchema.pre('save', function (next) {
    const user = this

    if(!user.isModified('password')) return;

    const salt = randomBytes(16).toString()
    const hashedPassword = createHmac('sha256',salt).update(user.password).digest("hex")

    this.password = hashedPassword
    this.salt = salt

    next()
})

UserSchema.static('checkPassword', async function (email,password){
    const user = await this.findOne({email})
    if(!user) throw new Error('This email is not registered with us');

    const salt = user.salt
    const hashedPassword = user.password

    const hashedInputPassword = createHmac('sha256',salt).update(password).digest("hex")

    if(hashedPassword !== hashedInputPassword) throw new Error('Invalid Password');

    const accessToken = createAccessToken(user)

    return accessToken
})

module.exports = model('User',UserSchema)