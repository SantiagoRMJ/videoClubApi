
const order = require('./model');
const order = await order.find({}).populate('userId')

module.exports.newOrder = (req, res) =>{
    const userId = req.body;
    const movieId = req.body;
    let pedido = new Order(user._id, movie._id, fecha, fecha +7);
    console.log('se ha creado un pedido');
};
