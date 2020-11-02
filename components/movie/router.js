const router = require('express').Router();
const movieService = require('./service');

router.get('/', movieService.searchForQuery);
router.get('/:_id', movieService.getOneMovie);
router.post('/', movieService.postMovie);
router.patch('/', movieService.changeMovie);

module.exports = router;





