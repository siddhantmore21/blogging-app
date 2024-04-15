const express = require('express');
const app = express()
const path = require('path');
const connectDb = require('./config/database')
const userRoutes = require('./routes/user')
const blogRoutes = require('./routes/blog')
const {checkForAuthentcation} = require('./middlewares/authentication')
const cookieParser = require('cookie-parser')
const PORT = 5000

connectDb()

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use('/user',userRoutes)
app.use('/blog',blogRoutes)
app.get('/',checkForAuthentcation("accessToken"),(req,res) => {
    res.render("home",{
       user : req.user
    })
})

app.listen(PORT,() => console.log(`Server running on ${PORT}`))