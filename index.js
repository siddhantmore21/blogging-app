const express = require('express');
const app = express()
const path = require('path');
const connectDb = require('./config/database')
const PORT = 5000

connectDb()

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.get('/',(req,res) => {
    res.render("home")
})

app.listen(PORT,() => console.log(`Server running on ${PORT}`))