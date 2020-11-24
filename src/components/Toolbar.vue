<template>
  <nav>
<!-- Toolbar (set up of the text)-->

    <v-app-bar
      app
      absolute
      color="teal lighten-3"
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
      >
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon> -->
      <router-link to="/">
        <v-toolbar-title class="white--text ml-8 pt-12" to="/">
           MAISON MEDICALE
        </v-toolbar-title>
      </router-link>
      <v-toolbar-items >
        <v-btn text class="ml-12" to="/">Accueil</v-btn>
        <v-btn text to="/dentiste">Dentiste</v-btn>
        <v-btn text to="/infirmiere" >Infirmière</v-btn>
        <v-btn text to="/medecin">Médecin généraliste</v-btn>
        <v-btn text to="/orthophoniste">Orthophoniste</v-btn>
        <v-btn text to="/sagefemme">Sage-femme</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-spacer></v-spacer>
      </template>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>