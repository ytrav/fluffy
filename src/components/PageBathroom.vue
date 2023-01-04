<template>
    <main>
      <img @click="wash" src="./../assets/bunny.png" alt="bunny">
    </main>
  </template>

  <script>
  export default {
    methods: {
      wash() {
        this.$store.commit('changeCleanliness', 5);
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  $pink: #FFAFCC;
  $pink2: #FFC8DD;
  $purple: #CDB4DB;
  $blue: #A2D2FF;
  $blue2: #BDE0FE;
  
  main {
    background-color: $blue;
  }

  img {
    transition: all .5s ease-out;
    &:active {
      transform: scale(0.97);
    transition: all 0.05s ease-out;
    }
  }
  </style>