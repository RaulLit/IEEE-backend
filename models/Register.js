const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    prn: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true,
        enum: ['IT', 'CE', 'EXTC', 'ME', 'ECS', 'AIDS', 'AIML', 'CSE(IOT)', 'Other']
    }
}, {timestamps: true})

module.exports = mongoose.model('Register', registerSchema)