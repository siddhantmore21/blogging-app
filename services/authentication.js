const jwt = require('jsonwebtoken');

const AUTH_PRIVATE_KEY = 'SusGuWZQfcchPjzp'

const createAccessToken = (user) => {
    const payload = {
        _id : user._id,
        firstName : user.firstName,
        lastame : user.lastame,
        email : user.email,
        mobile : user.mobile,
        role : user.role
    }

    const accessToken = jwt.sign(payload,AUTH_PRIVATE_KEY)

    return accessToken
}

const verifyToken = (accessToken) => {
    const payload = jwt.verify(accessToken,AUTH_PRIVATE_KEY)
    return payload
}

module.exports = {createAccessToken,verifyToken}