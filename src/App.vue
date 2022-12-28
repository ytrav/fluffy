<template>
  <AppHeader />
  <div id="wrapper">
    <router-view v-slot="{ Component, route }">
      <Transition name="slide">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>
  <AppNav />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav,
  }
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}




main {
  height: 100vh;

  @include flex(row, center, center, nowrap);
  // @include absolute(0, 0, 0, 0);
}

img {
  max-width: 445px;
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

// @media only screen and (min-width: 750px) {

//   .slide-enter-active,
//   .slide-leave-active {
//     transition: all 0.25s ease-out;
//   }

//   .slide-enter-to {
//     // position: absolute;
//     // right: 0;
//     transform: translateX(200px);
//   }

//   .slide-enter-from {
//     // position: absolute;
//     // right: -100%;
//     transform: translateX(-200px);

//   }

//   .slide-leave-to {
//     // position: absolute;
//     // left: -100%;
//     transform: translateX(-200px);
//   }

//   .slide-leave-from {
//     // position: absolute;
//     // left: 0;
//     transform: translateX(200px);
//   }

// }
</style>
