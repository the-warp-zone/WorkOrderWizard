const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: String,
    name: String,
    companyName: String,
    passwordHash: String,
	currentSessionToken: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
