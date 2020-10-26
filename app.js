console.log('express');

const e = require('express');
const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, ()=> console.log('Servidor levantado en el puerto 2000'));


app.get('/', (req, res)=> {
    res.send('helloWorld');
    console.log('he recibido una petición');
});

class movies {
    constructor(id, titulo, director, anyo, genero){
    this.id = id;    
    this.titulo = titulo;
    this.director = director;
    this.anyo = anyo;
    this.genero = genero
    }
}
const titanic = new movies(1,'titanic', 'James Cameron', '1997', 'drama');
const hobbsnshaw = new movies(2, 'hobbs and shaw', 'David Leitch', '2019', 'acción');
const porcoRosso = new movies(3,'porco rosso', 'Hayao Miyazaki', '1992', 'aventuras');
const aliG = new movies(4, 'ali G', 'Mark Mylod', '2002', 'comedia');
const hocusPocus = new movies(5, 'hocus pocus', 'Kenny Ortega', '1993', 'comedia');
const moulinRouge = new movies(6, 'moulin rouge', 'Baz Luhrmann', '2001', 'musical'); 
const boxtrols = new movies(7, 'boxtrols', 'Graham Annable', '2014', 'animacion');
const laPrincesaPrometida = new movies(8, 'la princesa prometida', 'Rob Reiner', '1987', 'aventuras');
const indianaJones = new movies(9,'indiana jones', 'Steven Spielberg', '1989', 'aventuras');
const jumanji = new movies(10, 'jumanji', 'Jake kasdan', '2017', 'aventuras');

let movieArr = [titanic, hobbsnshaw, porcoRosso, aliG, hocusPocus, moulinRouge, boxtrols, laPrincesaPrometida, indianaJones, jumanji];

app.get('/peliculas', (req, res)=> {
    res.json(movieArr);
    console.log('están buscando películas');
});
//Busca por id introducido la película

app.get('/movie/:id', (req,res)=>{
    res.json(movieArr.find(elem => elem.id == req.params.id));
})
        
app.post('/movie/', (req,res)=>{
    const movies = req.body;
    movies.id = getRandomInt(1, 1000);
    movieArr.push(req.body);
    res.json(movies);
})
        
app.get('/query', (req, res)=> res.send('movies' + req.query.country));
app.get('/user/:id', (req, res)=>{ res.send('mi name is:  ' + req.params.id)})

class user {
    constructor(id, nombre, contraseña, rol){
    this.id = id;    
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.rol = rol
    }
}
const santiago = new user(1, 'santiago', '1234', 'admin');

let userArr = [santiago];

app.get('/user', (req, res)=> {
    res.json(userArr);
    console.log('están buscando usuarios');
});

let arrPedidos = [];
let fecha = new Date();

class Order {
    constructor (userId, movieId, orderDate, returnDate) {
        this.userId = userId;
        this.movieId = movieId;
        this.orderDate = orderDate;
        this.returnDate = returnDate;
    }
}

app.post('/pedidos', (req, res) =>{
    const  userId = req.body
    const movieId = req.body;
    let pedido = new Order(userId, movieId, fecha, fecha +7);
    arrPedidos.push(pedido);
    let pelicula = movieArr.find(movies => movies.id == movieId);
    let usuarioPedido = userArr.find(user => user.id == userId);
    console.log('se ha creado un pedido');
});




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
