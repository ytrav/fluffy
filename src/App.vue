<template>
  <Transition name="loading">
    <LoadingScreen v-if="loading" />
  </Transition>
  <AppHeader />
  <div id="wrapper">
    <router-view v-slot="{ Component, route }">
      <Transition :name="'slide-' + slideDirection">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>
  <AppNav />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import LoadingScreen from './components/LoadingScreen.vue'
// import { beforeRouteLeave } from 'vue-router';
import { mapState } from 'vuex';


export default {
  name: 'App',
  data() {
    return {
      // slide direction variable and the array with route order
      slideDirection: 'right',
      loading: true,
      routesArray: [
        "/kitchen",
        "/bathroom",
        "/playroom",
        "/bedroom",
      ],
    }
  },
  components: {
    AppHeader,
    AppNav,
    LoadingScreen,
  },

  computed: {
    ...mapState([
      'hunger',
      'cleanliness',
      'happiness',
      'energy',
      'foodList',
    ])
  },

  mounted() {
    setInterval(() => {
      localStorage.setItem('timestamp', Date.now());

      localStorage.setItem('hunger', this.hunger);
      localStorage.setItem('cleanliness', this.cleanliness);
      localStorage.setItem('happiness', this.happiness);
      localStorage.setItem('energy', this.energy);
      localStorage.setItem('foodList', JSON.stringify(this.foodList));
      localStorage.setItem('settings', JSON.stringify(this.$store.state.settings));
    }, 2000);
    setTimeout(() => {
      console.log('loaded lel');
      this.loading = false;
    }, 1000);
    // this.loading = false;
  },

  created() {
    const savedFoodList = JSON.parse(localStorage.getItem('foodList'));
    if (savedFoodList) {
      this.$store.dispatch('loadFoodList', savedFoodList);
      console.log('defining the string');
      const savedSettingsString = localStorage.getItem('settings');
      if (savedSettingsString) {
        console.log('if statement true');
        const savedSettings = JSON.parse(savedSettingsString);
        console.log('defined json');
        this.$store.dispatch('loadSettings', savedSettings);
        console.log('dispatch complete');
      }
      console.log('out of the loop, good or bad');

      if (localStorage.getItem('timestamp')) {
        const savedTimestamp = Number(localStorage.getItem('timestamp'));
        const currentTimestamp = Date.now();
        const elapsedTime = currentTimestamp - savedTimestamp;
        console.log(`Time saved was ${new Date(Number(savedTimestamp)).toString()} and current time is ${new Date(currentTimestamp).toString()}, time elapsed ${elapsedTime}`);
        console.log(`expected to subtract the next amount of points from each stat:`);

        const ticks = elapsedTime / 5000;
        console.log(`hunger value is ${this.$store.state.hunger}`);
        this.calculateHunger(ticks);
        console.log(`hunger value is ${this.$store.state.hunger}`);
        console.log(`cleanliness value is ${this.$store.state.cleanliness}`);
        this.calculateCleanliness(ticks);
        console.log(`cleanliness value is ${this.$store.state.cleanliness}`);
        console.log(`happiness value is ${this.$store.state.happiness}`);
        this.calculateHappiness(ticks);
        console.log(`happiness value is ${this.$store.state.happiness}`);
        console.log(`energy value is ${this.$store.state.energy}`);
        this.calculateEnergy(ticks);
        console.log(`energy value is ${this.$store.state.energy}`);
      }
    }
  },

  // beforeRouteLeave(to, from, next) {
  //   console.log('test');
  //   // Update the slide direction before the route is changed
  //   this.slideDirection = this.getRouteDirection(from.path, to.path);

  //   // Proceed with the route change
  //   next();
  // },
  watch: {
    $route(to, from) {
      // Update the slide direction when the route changes
      this.slideDirection = this.getRouteDirection(from.path, to.path);
    },
  },
  methods: {
    updateHunger(value) {
      console.log(`hunger value became ${value}`);
      if (value < 0) {
        value = 0;
      }
      this.$store.commit('setHunger', value);
    },
    updateCleanliness(value) {
      console.log(`cleanliness value became ${value}`);
      if (value < 0) {
        value = 0;
      }
      this.$store.commit('setCleanliness', value);
    },
    updateHappiness(value) {
      console.log(`happiness value became ${value}`);
      if (value < 0) {
        value = 0;
      }
      this.$store.commit('setHappiness', value);
    },
    updateEnergy(value) {
      console.log(`energy value became ${value}`);
      if (value < 0) {
        value = 0;
      }
      this.$store.commit('setEnergy', value);
    },


    calculateHunger(ticks) {
      console.log(`hunger was ${Number(localStorage.getItem('hunger'))} and it's a ${typeof Number(localStorage.getItem('hunger'))}`);
      console.log(`now when we calculate and subtract 3 for every 330000 ticks, we get ${Math.max(0, Number(localStorage.getItem('hunger')) - 3 * Math.floor(ticks / 330000))}`);
      let result = Math.max(0, Number(localStorage.getItem('hunger')) - 3 * Math.floor(ticks / 330000));

      if (result < 0) {
        result = 0;
      }
      this.$store.commit('setHunger', result);
    },
    calculateCleanliness(ticks) {
      let result = Math.max(0, localStorage.getItem('cleanliness') - 4 * Math.floor(ticks / 330000));

      if (result < 0) {
        result = 0;
      }
      this.$store.commit('setCleanliness', result);
    },
    calculateHappiness(ticks) {
      let result = Math.max(0, localStorage.getItem('happiness') - 5 * Math.floor(ticks / 330000));

      if (result < 0) {
        result = 0;
      }
      this.$store.commit('setHappiness', result);
    },
    calculateEnergy(ticks) {
      let result = Math.max(0, localStorage.getItem('energy') - 4 * Math.floor(ticks / 330000));

      if (result < 0) {
        result = 0;
      }
      this.$store.commit('setEnergy', result);
    },


    // Function to determine the direction of navigation
    getRouteDirection(currentRoute, nextRoute) {
      // Find the index of the current route and the next route in the array
      const currentIndex = this.routesArray.indexOf(currentRoute);
      const nextIndex = this.routesArray.indexOf(nextRoute);

      // Check if the next route is to the right or to the left of the current route
      if (nextIndex > currentIndex) {
        return "right";
      } else if (nextIndex < currentIndex) {
        return "left";
      } else {
        // If the next route is the same as the current route, return null
        return null;
      }
    },
  },
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Unbounded:wght@300;400;500;700&display=swap');


@mixin flex($direction, $justify, $align, $wrap) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  flex-wrap: $wrap;
}

@mixin absolute($top, $right, $bottom, $left) {
  position: absolute;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
}

$pink: #FFAFCC;
$pink2: #FFC8DD;
$purple: #CDB4DB;
$blue: #A2D2FF;
$blue2: #BDE0FE;


// debug
// * {
//   border: 1px solid rgba(255, 0, 0, 0.452);
// }


.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.3s ease-out;
}

.loading-enter,
.loading-leave-to {
  opacity: 0;
}


.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease-out;
}

.slide-right-enter-to {
  position: absolute;
  right: 0;
}

.slide-right-enter-from {
  position: absolute;
  right: -100%;
}

.slide-right-leave-to {
  position: absolute;
  left: -100%;
}

.slide-right-leave-from {
  position: absolute;
  left: 0;
}



.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease-out;
}

.slide-left-enter-to {
  position: absolute;
  left: 0;
}

.slide-left-enter-from {
  position: absolute;
  left: -100%;
}

.slide-left-leave-to {
  position: absolute;
  right: -100%;
}

.slide-left-leave-from {
  position: absolute;
  right: 0;
}




main {
  height: 100vh;

  @include flex(row, center, center, nowrap);
  // @include absolute(0, 0, 0, 0);
}

img {
  max-width: 445px;
  max-height: 70vh;
  min-width: 20vw;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Unbounded', cursive;
  -webkit-tap-highlight-color: transparent;

}

html {
  background: rgb(255, 175, 204);
  background: linear-gradient(180deg, rgba(255, 175, 204, 1) 0%, rgba(255, 200, 221, 1) 54%, rgba(205, 180, 219, 1) 98%);
  min-height: 100vh;
}

#wrapper {
  overflow: hidden;
  @include absolute(0, 0, 0, 0);
  @include flex(row, stretch, center, nowrap);

  main {
    width: 100vw;
  }
}

#app {
  @include flex(column, space-between, center, nowrap);
}
</style>
