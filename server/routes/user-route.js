const router = require('express').Router()

const { 

    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser

} = require('../controllers/user-controller')

// GET
router.get('/', getUsers);

// GET
router.get('/:userId', getUser);

// POST
router.post('/', createUser);

// PUT
router.put('/:userId', updateUser);

// DELETE
router.delete('/:userId', deleteUser);

module.exports = router;