const router = require('express').Router()

const { 

    getUsers,
<<<<<<< HEAD
    getUser,
=======
<<<<<<< HEAD
=======
    getUser,
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
>>>>>>> Afh21-master
    createUser,
    updateUser,
    deleteUser

} = require('../controllers/user-controller')

// GET
router.get('/', getUsers);

<<<<<<< HEAD
// GET
router.get('/:userId', getUser);

=======
<<<<<<< HEAD
=======
// GET
router.get('/:userId', getUser);

>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
>>>>>>> Afh21-master
// POST
router.post('/', createUser);

// PUT
router.put('/:userId', updateUser);

// DELETE
router.delete('/:userId', deleteUser);

module.exports = router;