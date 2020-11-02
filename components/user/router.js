const router = require('express').Router();
const userService = require('./service');

router.get('/user', userService.getAllUsers);
router.post('/user', userService.createUser);
router.delete('/user', userService.deleteUser);
router.get('/user/login', userService.login);

module.exports = router;