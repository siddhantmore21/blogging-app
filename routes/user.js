const {Router} = require('express');
const { login, signUp, loginForm, signUpForm, logout } = require('../controllers/user')

const router = Router()

router.get("/signUpForm", signUpForm)
router.get("/loginForm", loginForm)
router.post("/signUp", signUp)
router.post("/login", login)
router.post("/logout", logout)

module.exports = router