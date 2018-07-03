const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

var userSchema  = new Schema({
    name:       { type: String, required: true },
    lastname:   { type: String, required: true },
    genre:      { type: String, required: true, enum: ['hombre', 'mujer'] },
    born:       { type: String, required: true },
    email:      { type: String, unique: true, required: true },
    password:   { type: String, required: true },
    rol:        { type: String, enum: ['administrator', 'teacher'], default: 'teacher'}
}, { collection: 'users'})

module.exports = mongoose.model('User', userSchema);