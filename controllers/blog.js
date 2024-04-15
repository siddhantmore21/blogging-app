const Blog = require('../models/blog')
const {categories,tags} = require('../config/constants')

const home = async (req,res) => {
    const blogs = await Blog.find({})
    return res.render("home",{
       user : req.user,
       blogs
    })
}

const getBlog = async (req, res) => {
    const slug = req.params.slug
    if(!slug)
    {
        return res.redirect('/home')
    }
    const blog = await Blog.findOne({slug})
    if(!blog)
    {
        return res.render('404')
    }
    return res.render("blog-details",{
       user : req.user,
       blog
    })
} 

const addBlog = (req, res) => {
    return res.render('blogs/add-blog',{user : req.user,categories,tags})
} 

const editBlog = async (req, res) => {
    const slug = req.params.slug
    if(!slug)
    {
        return res.redirect('/home')
    }
    const blog = await Blog.findOne({slug})
    if(!blog)
    {
        return res.render('404')
    }
    return res.render('blogs/edit-blog',{user : req.user,blog,categories,tags})
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

const updateBlog = async (req, res) => {
    const {title,slug,description,content,category,tags} = req.body
    if(!slug)
    {
        return res.redirect('/home')
    }   
    const blog = await Blog.findOneAndUpdate({slug},{
        title,
        slug,
        description,
        content,
        category,
        tags,
        createdBy : req.user._id
    })
    return res.redirect(`/blog/${slug}`)
} 

const deleteBlog = async (req, res) => {
    const slug = req.params.slug
    if(!slug)
    {
        return res.redirect('/home')
    }   
    
    const blog = await Blog.findOneAndDelete({slug})
    return res.redirect(`/home`)
} 



module.exports = { 
    home,
    getBlog, 
    addBlog, 
    createBlog, 
    editBlog, 
    updateBlog, 
    deleteBlog
}