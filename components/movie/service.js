const Movie = require('./model');


module.exports.getAllMovies = async (req, res) =>{
    const movies = await Peliculas.find({});
    console.log('están buscando películas');
    res.json(movies);
    console.log(movies)
    return movies;
}
module.exports.getOneMovie = async(req,res)=>{ 
    req.query;   
    const movie = await res.json(Peliculas.find({titulo}));
    console.log(movie);
    return movie;
}
module.exports.searchForQuery = async (res, req)=>{
    const query = {}
    if(req.params.titulo) query.titulo = req.params.titulo;
    if(req.params.director) query.director = req.params.director;
    const data = await Peliculas.find(query);
    res.json(data);
}
module.exports.postMovie = async (req,res)=>{
    const peliculas = new Peliculas(req.body);
    await peliculas.save();   
    console.log('se ha añadido una nueva pelicula')
    res.json(peliculas);

};
module.exports.changeMovie = async(req,res)=>{
    const movie = await Peliculasdb.findById(req.body._id);
    if(!movie) return ({error: 'no existe el id'})
    movie.titulo = req.body.titulo;
    console.log('se ha cambiado la información de alguna película')
    await movie.save();
    res.json(movie);
};