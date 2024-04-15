const {verifyToken} = require('../services/authentication')
const checkForAuthentcation = (tokenName) => {
    return (req,res,next) => {
        const accessToken = req.cookies[tokenName]  
        if(!accessToken)
        {
            next()
        } 

        try {
            const payload = verifyToken(accessToken)
            req.user = payload
            next()
        }
        catch(e)
        {
            next()
        }
    } 
}

module.exports = {checkForAuthentcation}