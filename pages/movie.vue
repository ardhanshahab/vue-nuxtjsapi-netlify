<template>
<v-container fluid>
<div class="d-flex">
  <v-row>
<v-card
v-for="(movie, index) in movies" :key="index"
    class="mx-3 my-3 "
    max-width="350"
  >
    <v-img
      :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`"
    >
    <v-chip
    color="black"
    pill
    >
      <v-icon>mdi-thumb-up</v-icon>
      <v-spacer></v-spacer>
      {{ movie.vote_average }}
      
    </v-chip>
    <v-chip    
    color="black"
    pill
    >
      <v-icon>mdi-account</v-icon>
      {{ movie.vote_count }}</v-chip>
    
    </v-img>

    <v-card-title>
  {{ movie.title }}
    </v-card-title>

    <v-card-subtitle>
      <p>Release Date : {{ movie.release_date }} </p>
    </v-card-subtitle>
        <v-card-text>
         {{movie.overview}}
        </v-card-text>
        <v-card-subtitle>
        <p>Popularity : {{ movie.popularity }}</p>
</v-card-subtitle>

  </v-card>

</v-row>
</div>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieVue',
  data() {
    return{
      movies: [],
    }
  },
  async fetch() {
    await this.getMovies()
  },
  methods: {
    async getMovies() {
      const data = axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=5a4de7664ce73b77393b1b9047281421&language=en-US&page=1'
      )

    const result = await data
    result.data.results.forEach((movie) => {
      this.movies.push(movie)
    })
    console.log(this.movies)

    }
  }
}
</script>
