const UserModel = require('../models/user-model')
const bcrypt    = require('bcryptjs')


module.exports = {

    getUsers: async (req, res) => {
        try {
            let user = await UserModel.find({})
            res.status(200).json({
                Ok:         true,
                message:    'Congrats!, List successfully - GET',
                user:       user
            })
        } catch (error) {
            res.status(400).json({
                Ok:         false,
                message:    'Ups!, It had ocurred an error - GET',
                error:      error
            })
        }
    },

<<<<<<< HEAD
=======
    getUser: async (req, res) => {
        try {
            let { userId } = req.params;
            let user = await UserModel.findById(userId)
            res.status(200).json({
                Ok:         true,
                message:    'Congrats!, List successfully User - GET',
                user:       user
            })
        } catch (error) {
            res.status(400).json({
                Ok:         false,
                message:    'Ups!, It had ocurred an error User - GET',
                error:      error
            })
        }
    },

>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
    createUser: async (req, res) => {
        try {
            let body    = req.body;
            let user    = new UserModel(body)
                user.password = bcrypt.hashSync(body.password, 10)
                
                if (body.rol) { user.rol = body.rol }  
                        await user.save(body)   
            
                res.status(200).json({
                    Ok:         true,
                    message:    'Congrats!, List successfully - GET',
                    user:       user
                })

        } catch (error) {
            res.status(400).json({
                Ok:         false,
                message:    'Ups!, It had ocurred an error - POST',
                error:      error
            })
        }

    },

    updateUser: async (req, res) => {
        try {
            let { userId }  = req.params;
            let body        = req.body; 
            let update      = { 
                name:       body.name,
                lastname:   body.lastname,
                genre:      body.genre,
                born:       body.born,
                email:      body.email    
            }
                if (body.password)  { update.password = bcrypt.hashSync(body.password, 10) }
                if (body.rol)       { update.rol = body.rol }  

            let user        = await UserModel.findByIdAndUpdate(userId, update)

            res.status(200).json({
                Ok:         true,
                message:    'Congrats!, List successfully - PUT',
                user:       user
            })  

        } catch (error) {
            res.status(400).json({
                Ok:         false,
                message:    'Ups!, It had ocurred an error - PUT',
                error:      error
            })
        }
    },

    deleteUser: async (req, res) => {
        try {
            let { userId }  = req.params;        
            let user        = await UserModel.findByIdAndRemove(userId);

            res.status(200).json({
                Ok:         true,
                message:    'Congrats!, List successfully - DELETE',
                user:       user
            })  

        } catch (error) {
            res.status(400).json({
                Ok:         false,
                message:    'Ups!, It had ocurred an error - DELETE',
                error:      error
            })
        }
    }


};