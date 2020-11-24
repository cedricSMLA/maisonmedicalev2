<template>
  <v-carousel
      cycle
      height="550"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="srcs[i]">
      </v-carousel-item>
    </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        srcs: [
        'https://images.pexels.com/photos/3957992/pexels-photo-3957992.jpeg?cs=srgb&dl=pexels-cottonbro-3957992.jpg&fm=jpg',
        'https://wallpapercrafter.com/desktop/289319-medical-appointment-doctor-healthcare-clinic.jpg',
        'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      slides: [
        'First',
        'Second',
        'Third',
      ],
      }
    },
  }
</script>
