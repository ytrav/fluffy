<template>
  <Transition name="loading">
    <LoadingScreen v-if="loading" />
  </Transition>
  <Transition name="alert">
    <AlertWindow @proceed="proceed" v-if="$store.state.alertVisible" />
  </Transition>
  <Transition name="settings-bg">
    <div id="alert-bg" v-if="$store.state.alertVisible"></div>
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
import LoadingScreen from './components/LoadingScreen.vue';
import AlertWindow from './components/AlertWindow.vue';
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
      deferredPrompt: null,
    }
  },
  components: {
    AppHeader,
    AppNav,
    LoadingScreen,
    AlertWindow,
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
      // console.log('loaded lel');
      this.loading = false;

    }, 1000);
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    // this.loading = false;
  },

  created() {
    const savedFoodList = JSON.parse(localStorage.getItem('foodList'));
    if (savedFoodList) {
      this.$store.dispatch('loadFoodList', savedFoodList);
      const savedSettingsString = localStorage.getItem('settings');
      if (savedSettingsString) {
        const savedSettings = JSON.parse(savedSettingsString);
        this.$store.dispatch('loadSettings', savedSettings);
      }

      if (localStorage.getItem('timestamp')) {
        const savedTimestamp = Number(localStorage.getItem('timestamp'));
        const currentTimestamp = Date.now();
        const elapsedTime = currentTimestamp - savedTimestamp;
        this.calculateHunger(elapsedTime);
        this.calculateCleanliness(elapsedTime);
        this.calculateHappiness(elapsedTime);
        this.calculateEnergy(elapsedTime);
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
    proceed() {

      switch (this.$store.state.currentTask) {
        case 'reset':
          localStorage.clear();
          location.reload();
          break;
        case 'restock':
          this.$store.commit('toggleAlert');
          this.$store.dispatch('loadFoodList', [
            {
              name: 'Apple',
              icon: 'food-apple',
              value: 10,
            },
            {
              name: 'Quaso',
              icon: 'food-croissant',
              value: 25,
            },
            {
              name: 'Coffee',
              icon: 'coffee',
              value: 10,
            },
            {
              name: 'Noodles',
              icon: 'noodles',
              value: 55,
            },
            {
              name: 'Baguette',
              icon: 'baguette',
              value: 35,
            },
            {
              name: 'Cake',
              icon: 'cake-variant',
              value: 65,
            },
            {
              name: 'Candy',
              icon: 'candy',
              value: 5,
            },
            {
              name: 'Coffee',
              icon: 'coffee',
              value: 10,
            },
            {
              name: 'Hamburger',
              icon: 'hamburger',
              value: 40,
            },
            {
              name: 'Turkey',
              icon: 'food-turkey',
              value: 70,
            },
            {
              name: 'Tea',
              icon: 'tea',
              value: 10,
            },
            {
              name: 'Tea',
              icon: 'tea',
              value: 10,
            },
            {
              name: 'Sugar',
              icon: 'cube-outline',
              value: 40,
            },
            {
              name: 'Sugar',
              icon: 'cube-outline',
              value: 40,
            },
            {
              name: 'Chili',
              icon: 'chili-mild',
              value: -15,
            },
            {
              name: 'Chili',
              icon: 'chili-mild',
              value: -15,
            },
            {
              name: 'Chili',
              icon: 'chili-mild',
              value: -15,
            },
            {
              name: 'Cupcake',
              icon: 'cupcake',
              value: 25,
            },
            {
              name: 'Beer',
              icon: 'glass-mug',
              value: 5,
            },
            {
              name: 'Beer',
              icon: 'glass-mug',
              value: 5,
            },
            {
              name: 'Wine',
              icon: 'glass-wine',
              value: 10,
            },
            {
              name: 'Cupcake',
              icon: 'cupcake',
              value: 25,
            },
            {
              name: 'Wine',
              icon: 'glass-wine',
              value: 10,
            },

          ]);
          this.$store.commit('setCurrentTask', null);
          break;
        default:
          break;
      }
    },
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
      let hunger = Number(localStorage.getItem('hunger'));
      let tickInterval = 330000;
      let hungerDecrement = 3;
      let decrementCount = Math.floor(ticks / tickInterval);
      let newHunger = hunger - (decrementCount * hungerDecrement);
      if (newHunger < 0) {
        newHunger = 0;
      }
      this.$store.commit('setHunger', newHunger);
    },
    calculateCleanliness(ticks) {
      let cleanliness = Number(localStorage.getItem('cleanliness'));
      let tickInterval = 330000;
      let cleanlinessDecrement = 4;
      let decrementCount = Math.floor(ticks / tickInterval);
      let newCleanliness = cleanliness - (decrementCount * cleanlinessDecrement);
      if (newCleanliness < 0) {
        newCleanliness = 0;
      }
      this.$store.commit('setCleanliness', newCleanliness);
    },
    calculateHappiness(ticks) {
      let happiness = Number(localStorage.getItem('happiness'));
      let tickInterval = 330000;
      let happinessDecrement = 5;
      let decrementCount = Math.floor(ticks / tickInterval);
      let newHappiness = happiness - (decrementCount * happinessDecrement);
      if (newHappiness < 0) {
        newHappiness = 0;
      }
      this.$store.commit('setHappiness', newHappiness);
    },
    calculateEnergy(ticks) {
      let energy = Number(localStorage.getItem('energy'));
      let tickInterval = 330000;
      let energyDecrement = 4;
      let decrementCount = Math.floor(ticks / tickInterval);
      let newEnergy = energy - (decrementCount * energyDecrement);
      if (newEnergy < 0) {
        newEnergy = 0;
      }
      this.$store.commit('setEnergy', newEnergy);
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

a {
  text-decoration: none;
  color: initial;
}


.tooltip-enter-active,
.tooltip-leave-active {
  transition: all 0.2s ease-out;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.settings-enter-active,
.settings-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.settings-enter-from,
.settings-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.alert-enter-active,
.alert-leave-active {
  transition: margin-top .3s ease-out, opacity .2s ease-out;
}

.alert-enter-from,
.alert-leave-to {
  margin-top: 10px;
  opacity: 0;
}

.settings-bg-enter-active,
.settings-bg-leave-active {
  transition: opacity 0.3s ease-out;
}

.settings-bg-enter-from,
.settings-bg-leave-to {
  opacity: 0;
}


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


// alert


#alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 370px;
  // height: 250px;
  z-index: 299;
  background-color: #fff;
  @include flex(column, space-between, stretch, nowrap);
  gap: 20px;
  padding: 25px;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

#alert-buttons {
  @include flex(row, flex-end, center, wrap);
  gap: 15px;

  button {
    border: none;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 10px;
    min-width: 50px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.8);
    }

    &.red {
      color: #FF3D00;
      background-color: #ffe1d7;
    }

    &.green {
      color: #006c00;
      background-color: #cdffcd;
    }
  }
}


#settings-bg,
#alert-bg {
  @include absolute(0, 0, 0, 0);
  background-color: #00000033;
  z-index: 249;
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
