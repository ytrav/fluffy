<template>
  <header>
    <Transition name="settings">
      <AppSettings v-if="$store.state.settingsOpen" />
    </Transition>
    <Transition name="settings-bg">
      <div @click="toggleSettings" id="settings-bg" v-if=$store.state.settingsOpen></div>
    </Transition>
    <div class="headwrap top">
      <div id="topbar">
        <div @click="moneyTest" class="balance">
          <mdicon name="circle-multiple" />{{ $store.state.balance }}
        </div>
        <button @click="toggleSettings" id="settings-icon">
          <mdicon name="cog" size="30" />
        </button>
      </div>
    </div>
    <div class="headwrap">
      <div id="statbar">
        <div :class="hungerClass" @mouseleave="showTip(null)" @mouseover="showTip('hunger')" class="stat">
          <mdicon name="food" size="25" />
          <div :style="{ height: (this.$store.state.hunger / 100) * 40 + 'px' }" class="progress"></div>
          <Transition name="tooltip">
            <span v-show="tooltip === 'hunger'" class="stat-caption">{{ this.$store.state.hunger }}</span>
          </Transition>
        </div>
        <div :class="cleanlinessClass" @mouseleave="showTip(null)" @mouseover="showTip('cleanliness')" class="stat">
          <mdicon name="shower" size="25" />
          <div :style="{ height: (this.$store.state.cleanliness / 100) * 40 + 'px' }" class="progress"></div>
          <Transition name="tooltip">
            <span v-show="tooltip === 'cleanliness'" class="stat-caption">{{ this.$store.state.cleanliness }}</span>
          </Transition>
        </div>
        <h2>fluffy</h2>
        <div :class="happinessClass" @mouseleave="showTip(null)" @mouseover="showTip('happiness')" class="stat">
          <mdicon name="emoticon-happy" size="25" />
          <div :style="{ height: (this.$store.state.happiness / 100) * 40 + 'px' }" class="progress"></div>
          <Transition name="tooltip"><span v-show="tooltip === 'happiness'" class="stat-caption">{{
            this.$store.state.happiness
          }}</span>
          </Transition>
        </div>
        <div :class="energyClass" @mouseleave="showTip(null)" @mouseover="showTip('energy')" class="stat">
          <mdicon name="sleep" size="25" />
          <div :style="{ height: (this.$store.state.energy / 100) * 40 + 'px' }" class="progress"></div>
          <Transition name="tooltip"><span v-show="tooltip === 'energy'" class="stat-caption">{{
            this.$store.state.energy
          }}</span>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppSettings from './AppSettings.vue';

export default {
  data() {
    return {
      interval: 350000,
      tooltip: null,
    }
  },
  components: {
    AppSettings,
  },
  methods: {
    toggleSettings() {
      this.$store.commit('toggleSettings');
    },
    moneyTest() {
      this.$store.commit('changeBalance', 100);
    },
    showTip(stat) {
      this.tooltip = stat;
      // setTimeout(() => {
      //   this.tooltip = null;
      // }, 5000);
    }
  },
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
  background-color: #31fa71;
}

.yellow .progress {
  background-color: #fff25e;
}

.red .progress {
  background-color: #FF3D00;
}



.headwrap {
  width: 100vw;
  width: 100vw;
  @include flex(row, center, center, nowrap);


  &.top {
    -webkit-backdrop-filter: brightness(0.9);
    backdrop-filter: brightness(0.9);
  }

  div {
    max-width: 400px;
    width: 100vw;
  }
}

#topbar {
  @include flex(row, space-between, center, nowrap);


  padding: 15px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform .2s ease-out;

    span {
      transition: color .1s ease-out;
    }

    &:hover {
      transform: rotate(90deg);
      .mdi {
        color: #fff;
      }
    }

  }

  .balance {
    @include flex(row, flex-start, center, wrap);
    gap: 5px;
    // max-width: 70px;
    // width: 100%;
  }
}

#statbar {

  @include flex(row, space-between, center, nowrap);
  gap: 25px;


  padding: 15px;
}

header {
  @include flex(column, stretch, center, nowrap);
  // background-color: $pink;
  // border: 2px solid $pink;
  // border-style: none none solid none;
  // margin: 10px;
  height: 130px;
  z-index: 10;
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

    .stat-caption {
      position: absolute;
      // transform: translateY(35px);
      margin-top: 65px;
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

@media only screen and (max-width: 360px) {
  h2 {
    display: none;
  }

  header {
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>