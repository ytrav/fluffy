<template>
  <header>
    <div :class="hungerClass" class="stat">
      <mdicon name="food" size="25" />
      <div :style="{ height: (this.$store.state.hunger / 100) * 40 + 'px' }" class="progress"></div>
    </div>
    <div :class="cleanlinessClass" class="stat">
      <mdicon name="shower" size="25" />
      <div :style="{ height: (this.$store.state.cleanliness / 100) * 40 + 'px' }" class="progress"></div>
    </div>
    <h2>fluffy</h2>
    <div :class="happinessClass" class="stat">
      <mdicon name="emoticon-happy" size="25" />
      <div :style="{ height: (this.$store.state.happiness / 100) * 40 + 'px' }" class="progress"></div>
    </div>
    <div :class="energyClass" class="stat">
      <mdicon name="sleep" size="25" />
      <div :style="{ height: (this.$store.state.energy / 100) * 40 + 'px' }" class="progress"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      interval: 350000,
      // hungerClass: '',
      // cleanlinessClass: '',
      // happinessClass: '',
      // energyClass: '',
    }
  },
  methods: {},
  mounted() {
    var that = this;
    setInterval(() => {
      this.$store.commit('changeHunger', -3);
      this.$store.commit('changeCleanliness', -4);
      this.$store.commit('changeHappiness', -5);
      this.$store.commit('changeEnergy', -4);
      that.interval = Math.floor(Math.random() * (660000 - 330000 + 1)) + 330000;
    }, this.interval);
  },
  computed: {
    hungerClass() {
      if (this.$store.state.hunger >= 75) {
        return 'green';
      } else if (this.$store.state.hunger >= 40) {
        return 'yellow';
      } else {
        return 'red';
      }
    },
    cleanlinessClass() {
      if (this.$store.state.cleanliness >= 75) {
        return 'green';
      } else if (this.$store.state.cleanliness >= 40) {
        return 'yellow';
      } else {
        return 'red';
      }
    },
    happinessClass() {
      if (this.$store.state.happiness >= 75) {
        return 'green';
      } else if (this.$store.state.happiness >= 40) {
        return 'yellow';
      } else {
        return 'red';
      }
    },
    energyClass() {
      if (this.$store.state.energy >= 75) {
        return 'green';
      } else if (this.$store.state.energy >= 40) {
        return 'yellow';
      } else {
        return 'red';
      }
    },
  },
  watch: {
    hunger: {
      handler(newValue) {
        if (newValue >= 75) {
          this.hungerClass = 'green';
        } else if (newValue >= 40) {
          this.hungerClass = 'yellow';
        } else {
          this.hungerClass = 'red';
        }
      },
      immediate: true,
    },
    cleanliness: {
      handler(newValue) {
        if (newValue >= 75) {
          this.cleanlinessClass = 'green';
        } else if (newValue >= 40) {
          this.cleanlinessClass = 'yellow';
        } else {
          this.cleanlinessClass = 'red';
        }
      },
      immediate: true,
    },
    happiness: {
      handler(newValue) {
        if (newValue >= 75) {
          this.happinessClass = 'green';
        } else if (newValue >= 40) {
          this.happinessClass = 'yellow';
        } else {
          this.happinessClass = 'red';
        }
      },
      immediate: true,
    },
    energy: {
      handler(newValue) {
        if (newValue >= 75) {
          this.energyClass = 'green';
        } else if (newValue >= 40) {
          this.energyClass = 'yellow';
        } else {
          this.energyClass = 'red';
        }
      },
      immediate: true,
    },

  }
}
</script>

<style lang="scss" scoped>
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


.green .progress {
  background-color: #64cd64;
}

.yellow .progress {
  background-color: #ffff00;
}

.red .progress {
  background-color: #ff0000;
}

header {
  @include flex(row, space-evenly, center, nowrap);

  // background-color: $pink;
  // border: 2px solid $pink;
  // border-style: none none solid none;
  padding: 15px;
  // margin: 10px;
  height: 65px;
  gap: 25px;
  z-index: 10;
  max-width: 400px;
  width: 100vw;

  h2 {
    font-family: 'Shadows Into Light', cursive;
    font-weight: normal;
    font-size: 2em;
  }

  .stat {
    width: 40px;
    height: 40px;
    border: 1px solid #000;

    @include flex(row, center, center, nowrap);
    border-radius: 5px;
    overflow: hidden;

    span {
      z-index: 9;
      color: #000;
      // mix-blend-mode: difference;
    }


    .progress {
      width: 40px;
      height: 40px;
      // background-color: $blue2;
      position: absolute;
      align-self: flex-end;
      z-index: 8;
      transform: translateY(1px);
      border-radius: 5px;
      border: 1px solid #000;
      // border-style: none solid solid solid;

      transition: height 0.4s ease;
    }
  }
}
</style>