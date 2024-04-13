const {Schema,model} = require('mongoose')

const BlogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    slug : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    category : {
        type : String,
    },
    tags : [String],
    displayImage : {
        type : String,
        default : 'default.png'
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        required : true,
        reference : 'User'
    }
},{
    timestamps:true
})


module.exports = model('Blog',BlogSchema)