import axios from 'axios'
export const state = () => ({
    movies: [],
})

export const mutations = {
    setMovies(state, param) {
        state.movies = param;
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
            console.log(result.data.results)
          })
    },

}