import axios from 'axios'
export const state = () => ({
    movies: [],
    id: [],
})

export const mutations = {
    setMovies(state, param) {
        state.movies = param;
      },
    setId(state, param) {
        state.id = param;
      },
}

export const actions = {
    playMovies(store) {
        axios.get(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=5a4de7664ce73b77393b1b9047281421&language=en-US&page=1')
          .then((result) => {
            store.commit("setMovies", result.data.results);
          })
    },
    popularMovies(store) {
        axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=5a4de7664ce73b77393b1b9047281421&language=en-US&page=1')
          .then((result) => {
            store.commit("setMovies", result.data.results);
          })
    },
    latestMovies(store) {
      axios.get(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=5a4de7664ce73b77393b1b9047281421&language=en-US&page=1')
        .then((result) => {
          store.commit("setMovies", result.data.results);
          console.log(result.data.results)
        })
  },

    genreMovies(store) {
      axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=5a4de7664ce73b77393b1b9047281421&language=en-US')
        .then((result) => {
          store.commit("setMovies", result.data.genres);

        })
  },
//   getMovies(store) {
//     axios.get(
//         'https://api.themoviedb.org/3/movie/${this.route.params.id}?api_key=5a4de7664ce73b77393b1b9047281421&language=en-US')
//       .then((result) => {
//         store.commit("setMovies", result.data.results);
//        console.log(result.data.results)
//        })
// },
}