const express = require('express');
const myMovie = require('./models/myMovie');
const movieRouter = require('./routes/movieRouter')(myMovie);
const cors = require('cors')

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.use('/api', movieRouter);

app.get('/', (req, res) => {
  res.send('Welcome To my API please use /api/movies to get return a list of movies');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

