const {Router} = require('express');
const { home, getBlog, addBlog, createBlog, editBlog, updateBlog, deleteBlog} = require('../controllers/blog')
const {checkForAuthentcation} = require('../middlewares/authentication')
const router = Router()

router.get("/",checkForAuthentcation("accessToken"), home)
router.get("/addBlog",checkForAuthentcation("accessToken"), addBlog)
router.get("/:slug",checkForAuthentcation("accessToken"), getBlog)
router.post("/createBlog",checkForAuthentcation("accessToken"), createBlog)
router.get("/edit/:slug", checkForAuthentcation("accessToken"),editBlog)
router.post("/update/:slug", checkForAuthentcation("accessToken"), updateBlog)
router.post("/delete/:slug", checkForAuthentcation("accessToken"), deleteBlog)

module.exports = router