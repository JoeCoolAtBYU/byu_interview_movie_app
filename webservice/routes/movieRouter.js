const express = require('express');
const movieController = require('../controllers/movieController');


function routes(myMovie) {
  const movieRouter = express.Router();
  const controller = movieController(myMovie)

  movieRouter.route('/movies')
    .get(controller.get);

  return movieRouter;
}

module.exports = routes;