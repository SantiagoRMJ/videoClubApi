
const Order = require('./model');
//const order = order.find({}).populate('userId')

module.exports.newOrder = async (req, res) =>{
    if(!req.body.userId || !req.body.movieId) return ({error: 'no existe el id'})
    const userId = req.body.userId;
    const movieId = req.body.userId;
    const fecha = new Date();
    const fechaDevolucion = new Date()
    fechaDevolucion.setDate(fechaDevolucion.getDate() + 7)  
    let pedido = new Order({userId, movieId, fecha, fechaDevolucion});
    await pedido.save();
    console.log('se ha creado un pedido');
    res.json(pedido);
};
/*
module.exports.viewAllOrders = (req, res)  =>{
    const
}
*/