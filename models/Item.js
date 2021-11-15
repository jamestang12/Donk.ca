const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Plase add a name'],
        trim: true,
        maxlength: [69, 'Name can not be more than 69 characters']
    },
    description:{
        type: String,
        required: [true, 'Plase add a description'],
        trim: true,
        maxlength: [69, 'Description can not be more than 69 characters']
    },
    user:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    price:{
        type: Number,
        required: true
    },
    location: {
        city: String,
        zipcode: String,
    },
    photos:{
        type: [String],
        required: true,
    }
})


module.exports = mongoose.model('Item', ItemSchema);