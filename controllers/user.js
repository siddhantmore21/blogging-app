const User = require('../models/user')

const signUpForm = (req, res) => {
    return  res.render('signup')
} 

const loginForm = (req, res) => {
    return res.render('login')
} 



const signUp = async (req, res) => {
    const {firstName, lastName, email, mobile, password} = req.body
    const user = User.create({
        firstName,
        lastName,
        email,
        mobile,
        password
    })
    return res.redirect('/user/loginForm')
} 

const login = async (req, res) => {
    try{
        const {email, password} = req.body
        const {user,accessToken} = await User.checkPassword(email,password)
        req.user = user

        console.log(user)
        if(accessToken)
        {
            return res.cookie("accessToken",accessToken).redirect('/')
        }
        return res.redirect('/user/loginForm')
    }
    catch(e)
    {
        console.log(e)
        return res.render('login',{
            error : "Invalid Email or Password"
        })
    }
   
} 

const logout = async (req, res) => {
    res.clearCookie('accessToken')
    return res.redirect('/user/loginForm')
} 

module.exports = {
    signUpForm,
    loginForm,
    signUp,
    login,
    logout
}