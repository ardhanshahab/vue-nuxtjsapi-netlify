<template>
<div>
    <v-container>
        <h1 class="text-center">Category</h1>
        <v-divider class="mx-3 my-3"></v-divider>
        <v-row >
            <v-col cols="2">
            </v-col>
                <v-col cols="8" class="d-flex flex-wrap justify-space-between">
                <v-btn
                v-for="(movie, index) in listMovies" :key="index"
                class="mx-3 my-3"
                >{{ movie.name }}</v-btn>
                <v-row class="mx-4 my-4 d-flex flex-wrap justify-space-between">
                <v-btn href="/movie/playingmovie">Now Playing</v-btn>
                <v-btn href="/movie/topmovie">Top Rated Movie</v-btn>
                <v-btn href="/movie/popularmovie">Popular Movie</v-btn>
                </v-row>
                </v-col>
            
            <v-col cols="2">
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'IndexMovie',
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
      this.$store.dispatch("movie/genreMovies")
},
  },
}
</script>