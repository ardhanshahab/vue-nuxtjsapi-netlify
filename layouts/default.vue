<template>
  <v-app dark>
    <v-app-bar app>
      <!-- category -->
      <v-icon class="my-3 mx-3">mdi-movie</v-icon>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn href="/">
      <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>Sliw </span>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Movie Int ID',
    }
  },
}
</script>
