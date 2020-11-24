<template>
  <v-app>
    <Toolbar/>

    <v-main>
      <v-container fluid>

      <!-- If using vue-router -->
      
       <router-view></router-view> 
      </v-container>
     <!-- <HelloWorld/>-->
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  name: 'App',

  components: {
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
