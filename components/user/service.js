const User = require('./model')

module.exports.getAllUsers = async (req, res) =>{
    if(User.rol !== 'ADMIN') return console.error('no tienes permisos')
    const data = await user.find({})
    res.json(data);
}
module.exports.findUser = async (req, res) =>{
    if(!req.body.name || !req.body.password) return console.error('usuario sin permiso')
    const data = await user.find({_id: req.params.id})
    res.json(data);
}
module.exports.createUser = async (req, res) =>{
    if(!req.body.name || !req.body.pass || !req.body.email) return res.json({error: 'no se han rellenado todos los campos'});
    const newUser = new user(req.body);
    await newUser.save();
    console.log('se ha añadido un nuevo usuario');
    res.json(newUser);
}
module.exports.deleteUser = async (req, res) =>{
    if(req.body.rol !== 'ADMIN'){
        return res.json({error: 'no tienes permisos para borrar un usuario'})
    }
    req.body.deleteOne;
}
module.exports.login = async (req, res)=>{
    const{user, password} = req.body;
    if(!user || !password) return res.json({error: 'faltan datos'});
    const data = users.find(e => e.user === user && e.password === password);
    if(!data) return res.json({error: 'ningún usuario coincide con tu usuario y contraseña'});
    const token = jwt.sign({user: data.id}, secret, {expiresIn: 3600*24});
    res.json({token: token, mensaje: 'login correcto'});
    return data;
};