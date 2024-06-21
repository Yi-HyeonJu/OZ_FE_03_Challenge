const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        unique: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;