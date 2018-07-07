const userModel  = require('../models/user-model');
const bcrypt     = require('bcrypt');
const jwt        = require('jsonwebtoken');

module.exports = {

    login: async (req, res) => {        

        let body = req.body;                

        let user = await userModel.findOne({ email: body.email}).exec()

        if (user) {
            if ( body.password == null) res.json({ Ok: false, message: 'Ups! It had occured an error password - Login POST '});
            if ( !bcrypt.compareSync( body.password, user.password )) res.json({ Ok: false, message: 'Ups! It had occured an error password - Login POST '});
            user.password = ':), oh! esta es mi contraseña :D'
            let token = jwt.sign({user: user}, 'd-u-q-u-e-.-o-r-d-u-z', {expiresIn: 18000})
            res.status(200).json({
                Ok:             true,
                message:        "Congratulations, Login - POST",
                user:           user,
                token:          token
            })
        } else {res.json({Ok:false}) }
    
    }

};