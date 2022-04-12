<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://www.iconpacks.net/icons/1/free-movie-icon-850-thumb.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Movie International ID
        </h1>

        <p class="subheading font-weight-regular">
          Klik tombol dibawah untuk ke halaman Category
          <br/>
          <br/>
          <br/>
          
          <v-btn
          light
          color="blue lighten-4"
          href="/movie"
          >GO!</v-btn>
        </p>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data() {
      
    },
    methods: {
        redirectnews() {
        this.$router.push('/movie');
    }
    }
  }
</script>
