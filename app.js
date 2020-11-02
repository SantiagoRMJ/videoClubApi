const express = require('express');
const routerMovie = require('./components/movie/router')
const routerUser = require('./components/user/router');
//const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json());
app.use('/movie', routerMovie);
app.use('/user', routerUser);
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/db-videoclub',{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(()=> console.log('conectado a la base de datos'))
.catch( e => console.error('no estoy conectado'));
/*
const autorizacion = app.use((req, res)=>{
    const{user, password} = req.body;
    if(!user || !password) return res.json({error: 'faltan datos'});
    const data = users.find(e=> e.user === user && e.password === password);
    if(!data) return res.json({error: 'ningún usuario coincide con tu usuario y contraseña'});
    //const token = jwt.sign({user: data.id}, secret, {expiresIn: 3600*24});
    //res.json({token: token, mensaje: 'login correcto'});
})
const secret = 'kjdgsfuayhdjfakhfadjksfgs';
*/
/*
const auth = (req, res, next) =>{
    if(req.headers.auth !== TOKEN) return res.json({error: 'usuario no autorizado'});
    next()
}
*/
app.listen(4001, ()=> console.log('Servidor levantado en el puerto 4000'));
