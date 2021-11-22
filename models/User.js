const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const { isEmail } = require('validator')

const userSchamer = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
});

const User = mongoose.model('user', userSchamer);
module.exports = User;