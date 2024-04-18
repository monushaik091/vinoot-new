const express = require('express');
const router = express.Router();
const userController = require('../controllers/MasterAdminContr');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', userController.getAllUsers);
router.patch('/users/:id', userController.updateUserActiveState);


module.exports = router;
