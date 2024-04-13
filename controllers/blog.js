const Blog = require('../models/blog')
const {categories,tags} = require('../config/constants')

const getBlog = (req, res) => {
    return  res.render('signup')
} 

const addBlog = (req, res) => {
    return res.render('blogs/add-blog',{user : req.user,categories,tags})
} 



const createBlog = async (req, res) => {
    const {title,slug,description,content,category,tags} = req.body
    const blog = await Blog.create({
        title,
        slug,
        description,
        content,
        category,
        tags,
        createdBy : req.user._id
    })
    return res.redirect('/')
} 

const login = async (req, res) => {
    try{
        const {email, password} = req.body
        const accessToken = await User.checkPassword(email,password)
        if(accessToken)
        {
            return res.cookie("accessToken",accessToken).redirect('/')
        }
        return res.redirect('/user/loginForm')
    }
    catch(e)
    {
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
    getBlog, 
    addBlog, 
    createBlog, 
    // editBlog, 
    // updateBlog, 
    // deleteBlog
}