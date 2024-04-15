const {Router} = require('express');
const { home, getBlog, addBlog, createBlog, editBlog, updateBlog, deleteBlog} = require('../controllers/blog')
const {checkForAuthentcation} = require('../middlewares/authentication')
const router = Router()
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination : function (req,file,cb)
    {
        cb(null,path.resolve(`./public/images/blog-images/`))
    },
    filename : function (req,file,cb){
        const fileOriginalName = file.originalname.toLowerCase().replace(/\s+/g, '_');
        const fileName = `${Date.now()}_${fileOriginalName}`   
        cb(null,fileName)
    }
})

const uploadImage = multer({storage : storage})

router.get("/",checkForAuthentcation("accessToken"), home)
router.get("/addBlog",checkForAuthentcation("accessToken"), addBlog)
router.get("/:slug",checkForAuthentcation("accessToken"), getBlog)
router.post("/createBlog",checkForAuthentcation("accessToken"), uploadImage.single('displayImage'), createBlog)
router.get("/edit/:slug", checkForAuthentcation("accessToken"),editBlog)
router.post("/update/:slug", checkForAuthentcation("accessToken"),uploadImage.single('displayImage'), updateBlog)
router.post("/delete/:slug", checkForAuthentcation("accessToken"), deleteBlog)

module.exports = router