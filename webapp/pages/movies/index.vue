<template>
  <div>
    <SearchMovies @search-text="searchText" />
    <Movie
      v-for="movie in movies"
      :key="movie.movieId"
      :movie-id="movie.movieId"
      :title="movie.title"
      :poster-image-url="movie.posterImageUrl"
      :popularity-summary="movie.popularitySummary"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Movie from '../../components/Movie'
import SearchMovies from '../../components/SearchMovies'

export default {
  components: {
    Movie,
    SearchMovies,
  },
  data() {
    return {
      movies: [],
    }
  },
  head() {
    return {
      title: 'MY_MOVIE_PROJECT',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My app for BYU interview process',
        },
      ],
    }
  },
  // created() {
  //   this.movies = []
  // },
  methods: {
    async searchText(text) {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          Accept: 'application/json',
        },
      }
      try {
        const url = `http://localhost:4005/api/movies?search=${text}&lang=eng&page=1`
        const res = await axios.get(url, config)
        // eslint-disable-next-line no-console
        console.log(res)
        this.movies = res.data
        console.log(res.data[0].title)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
