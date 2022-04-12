<template>
<v-container fluid>
<div 
class="d-flex"
>
  <v-row>
<v-card
v-for="(movie, index) in listMovies" :key="index"
    class="mx-3 my-3 "
    max-width="200"
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
       
    <v-card-subtitle>
     <p>Popularity : {{ movie.popularity }}</p>
    </v-card-subtitle>

    <v-btn
    :href="`/movie/${movie.id}`"
    >Get More Info</v-btn>

  </v-card>

</v-row>
</div>
</v-container>
</template>

<script>


export default {
  name: 'MovieVue',
  computed: {
    listMovies() {
      return this.$store.state.movie.movies;
    },
  },
    mounted() {
    this.fetchMovie();
  },
  methods: {
    fetchMovie () {
      this.$store.dispatch("movie/playMovies")
    },
  },
}
</script>
