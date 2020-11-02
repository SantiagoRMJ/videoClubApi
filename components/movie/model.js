const mongoose = require("mongoose");
const Schema = module.exports = mongoose.Schema;

Peliculas = mongoose.model('Peliculas', new Schema({
    titulo:{
        type: String,
        required: true
    },
    director:{
        type: String
    },
    genero:{
        type: String
    }
}))
module.exports = Peliculas;







/*
const titanic = {id: 1, titulo: 'titanic', director: 'James Cameron'}
const hobbsnshaw = {id: 2, titulo:'hobbs and shaw', director: 'David Leitch'};
const porcoRosso = {id: 3, titulo: 'porco rosso',director: 'Hayao Miyazaki'}
const aliG = {id: 4, titulo:'ali G', director:'Mark Mylod'};
const hocusPocus = {id: 5, titulo:'hocus pocus', director:'Kenny Ortega'};
const moulinRouge = {id: 6, titulo:'moulin rouge', director:'Baz Luhrmann',}; 
const boxtrols = {id: 7, titulo:'boxtrols', director: 'Graham Annable'};
const laPrincesaPrometida = {id: 8, titulo:'la princesa prometida', director: 'Rob Reiner'};
const indianaJones = {id: 9, titulo:'indiana jones', director: 'Steven Spielberg'};
const jumanji = {id: 10,titulo: 'jumanji', director: 'Jake kasdan'};

const insertMovies = async()=>{
    const pelis = [titanic, hobbsnshaw, porcoRosso, aliG, hocusPocus, moulinRouge, boxtrols, laPrincesaPrometida, indianaJones, jumanji];
    for(i = 0; i < pelis.length; i++){
        const peli = new Peliculas(pelis[i]);
        await peli.save();
    }
}


insertMovies().then()
*/