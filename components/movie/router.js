const router = require('express').Router();
const movieService = require('./service');

router.get('/', movieService.getAllMovies);
router.get('/movie/:titulo', movieService.searchForQuery);
router.get('/movie/:titulo', movieService.getOneMovie);
router.post('/movie/', movieService.postMovie);
router.patch('/movie', movieService.changeMovie);

module.exports = router;





