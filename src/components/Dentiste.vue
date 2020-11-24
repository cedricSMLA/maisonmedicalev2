<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2019.2F10.2F08.2F9f53c290-764b-403b-ae49-77ab2f896979.2Ejpeg/1200x630/background-color/ffffff/quality/70/cr/wqkgU29saXNJbWFnZXMgLyBHZXR0eSBJbWFnZXMgLyBDQVBJVEFM/chirurgien-dentiste-1353058.jpg"
      height="250px"
    ></v-img>

    <v-card-title>
      Dentiste
    </v-card-title>

    <v-card-subtitle>
      Des dents plus blanche que jamais
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: true,
    }),
  }
</script>