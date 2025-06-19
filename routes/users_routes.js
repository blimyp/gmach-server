const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/', usersController.getAllUsers);
router.post('/createUser', usersController.createUser);
router.get('/:id', usersController.getUserById);
router.delete('/:id', usersController.deleteUser);
router.post('/login', usersController.loginUser);

module.exports = router;
