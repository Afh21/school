const router = require('express').Router()

const {

    login

} = require('../controllers/auth-controller')

// POST
router.post('/', login);

module.exports = router;