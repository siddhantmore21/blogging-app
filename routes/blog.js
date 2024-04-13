const {Router} = require('express');
const { getBlog, addBlog, createBlog, editBlog, updateBlog, deleteBlog} = require('../controllers/blog')

const router = Router()

router.get("/get/:slug", getBlog)
router.get("/addBlog", addBlog)
router.post("/createBlog", createBlog)
// router.get("/edit/:slug", editBlog)
// router.post("/update/:slug", updateBlog)
// router.post("/delete/:slug", deleteBlog)

module.exports = router