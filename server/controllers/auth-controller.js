const userModel  = require('../models/user-model');
const bcrypt     = require('bcrypt');
const jwt        = require('jsonwebtoken');

module.exports = {

<<<<<<< HEAD
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
    
=======
    login: (req, res) => {        

        let body = req.body;                

            userModel.findOne({ email: body.email}, (err, userDB) => {

                if (err) res.json({ Ok: false, message: 'Ups! It had occured an error - Login POST ', error: err});
                if ( !bcrypt.compareSync( body.password, userDB.password ) ) res.json({ Ok: false, message: 'Ups! It had occured an error password - Login POST ', error: err});
                
                userDB.password = ':), oh! esta es mi contraseña :D'

                let token = jwt.sign({user: userDB}, 'd-u-q-u-e-.-o-r-d-u-z', {expiresIn: 18000})
    
                res.status(200).json({
                    Ok:             true,
                    message:        "Congratulations, Login - POST",
                    user:           userDB,
                    token:          token
                })
    
            })                       

>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
    }

};