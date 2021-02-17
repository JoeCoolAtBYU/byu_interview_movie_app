const myMovie = function(movie){
  this.movieId = movie.id;
  this.title = movie.original_title;
  this.posterImageUrl = movie.poster_path === null ? null : encodeURI(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
  this.popularitySummary = `${movie.popularity} out of ${movie.vote_count}`;
}

module.exports = myMovie;