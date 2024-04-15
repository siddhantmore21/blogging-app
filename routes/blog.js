const {Router} = require('express');
const { getBlog, addBlog, createBlog, editBlog, updateBlog, deleteBlog} = require('../controllers/blog')
const {checkForAuthentcation} = require('../middlewares/authentication')
const router = Router()

router.get("/get/:slug",checkForAuthentcation("accessToken"), getBlog)
router.get("/addBlog",checkForAuthentcation("accessToken"), addBlog)
router.post("/createBlog",checkForAuthentcation("accessToken"), createBlog)
// router.get("/edit/:slug", editBlog)
// router.post("/update/:slug", updateBlog)
// router.post("/delete/:slug", deleteBlog)

module.exports = router