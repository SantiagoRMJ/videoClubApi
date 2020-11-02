const router = require('express').Router()
const orderService = require('./service')

router.post('/pedidos', orderService.newOrder);

module.exports = router;
