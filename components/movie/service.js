const Movie = require('./model');



module.exports.getOneMovie = async(req,res)=>{ 
    const movieId = req.params._id  
    const movie = await Peliculas.findOne({_id: movieId});
    res.json(movie)
}
module.exports.searchForQuery = async (req, res)=>{
    const query = {}
    if(req.query.titulo) query.titulo = req.query.titulo;
    if(req.query.director) query.director = req.query.director;
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