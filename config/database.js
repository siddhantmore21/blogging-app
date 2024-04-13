const mongoose =require('mongoose')
const dbUrl = 'mongodb://localhost:27017/BloggingApp'

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(dbUrl)
        console.log(`Connected to Database : ${connect.connection.host}`)
    } catch (err) {
        console.log(err.message)
        exit(1);        
    }
}

module.exports = connectDb