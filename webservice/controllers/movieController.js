const request = require('request');
const API_KEY = '95848e6b6628c98611f111abd20018db';

function movieController(myMovie){
  function get(req, res){
    let search = (req.query.search || 'The Care Bears');
    let lang = (req.query.lang || 'eng');
    let page = (req.query.page || 1);
    let url = encodeURI(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&query=${search}&page=${page}&include_adult=false`);

    request.get(url, function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        let r = JSON.parse(response.body);
        let totalPages = r.total_pages
        let total_results = r.total_results
        let movies = r.results;

        const returnMovies = movies.map((movie) => {
          return new myMovie(movie);
        })

        res.json(returnMovies);
      }
    });
  }

  return {get}
}

module.exports = movieController;