const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

var userSchema  = new Schema({
    name:       { type: String, required: true },
    lastname:   { type: String, required: true },
    genre:      { type: String, required: true, enum: ['m', 'f'] },
    born:       { type: String, required: true },
    email:      { type: String, unique: true, required: true },
    password:   { type: String, required: true },
<<<<<<< HEAD
    rol:        { type: String, enum: ['administrator', 'teacher'], default: 'teacher'},
    accept:     { type: Boolean, default: false }
=======
    rol:        { type: String, enum: ['administrator', 'teacher'], default: 'teacher'}    
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
}, { collection: 'users'})

module.exports = mongoose.model('User', userSchema);


