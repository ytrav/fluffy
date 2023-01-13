<template>
  <main :class="{ asleep: this.$store.state.asleep }">
    <img src="./../assets/bunny.png" alt="bunny">

    <button @click="this.$store.commit('toggleSleep')" class="lamp-button">

      <mdicon :name="'lamp' + lampIcon()" size="60" />
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // lampIcon: '-outline',
    }
  },
  methods: {
    lampIcon() {
      if (this.$store.state.asleep === true) {
        return '-outline';
      } else return '';
    }
  }
}
</script>

<style lang="scss" scoped>
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

main {
  background-color: $purple;
  &.asleep {
    filter: brightness(0.8);
  }
}

.lamp-button {
  @include absolute(auto, auto, 100px, auto);
  padding: 10px;
  border-radius: 50%;
  backdrop-filter: blur(3px) brightness(0.9);
  background-color: transparent;
  border: none;
  color: #fff;
  transition: transform .15s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.3);
  }
}
</style>