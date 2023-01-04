<template>
  <main>
    <img src="./../assets/bunny.png" alt="bunny">
    <div class="interact">
      <button class="arrow left" @click="scrollLeft">
        <mdicon name="chevron-left" />
      </button>
      <button class="arrow right" @click="scrollRight">
        <mdicon name="chevron-right" />
      </button>
      <div class="food-scroll" ref="scrollableContainer">
        <div class="food-item" v-for="(food, index) in foodList" :key="index" @click.prevent="selectFood(index)"
          :class="{ 'food-selected': index === selectedIndex }">
          <mdicon :name="food.icon" />
          <span class="tag">{{ food.name }}</span>
          <Transition name="confirm" mode="out-in">
            <div class="confirm" v-if="selectedIndex === index">
              <button @click.stop="consumeFood(index, food)">
                <mdicon name="check-bold" />
              </button>
              <button @click.stop="resetFood">
                <mdicon name="close-thick" />
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      selectedIndex: null,
    }
  },
  computed: {
    ...mapState(['foodList']),
  },

  methods: {

    scrollLeft() {
      this.$refs.scrollableContainer.scrollBy({
        left: -this.$refs.scrollableContainer.offsetWidth,
        behavior: 'smooth'
      });
    },
    scrollRight() {
      this.$refs.scrollableContainer.scrollBy({
        left: this.$refs.scrollableContainer.offsetWidth,
        behavior: 'smooth'
      });
    },



    selectFood(index) {
      this.selectedIndex = index;
    },
    resetFood() {
      this.selectedIndex = null;
    },
    consumeFood(index, value) {
      this.$store.commit('removeFood', index);
      // if (value.name === 'Coffee') {
      //   this.$store.commit('changeEnergy', Number(value.value));
      // } else {
      //   this.$store.commit('changeHunger', Number(value.value));
      // }
      switch (value.name) {
        case 'Coffee':
          this.$store.commit('changeEnergy', Number(value.value));
          break;
        case 'Chili':
          this.$store.commit('changeHappiness', Number(value.value));
          break;
        case 'Sugar':
          this.$store.commit('changeEnergy', Number(value.value));
          break;
        case 'Tea':
          this.$store.commit('changeHappiness', Number(value.value));
          break;
        case 'Beer':
          this.$store.commit('changeHappiness', Number(value.value));
          break;
        case 'Wine':
          this.$store.commit('changeHappiness', Number(value.value));
          break;
        case 'Cupcake':
          this.$store.commit('changeHappiness', Number(value.value));
          break;

        default:
          this.$store.commit('changeHunger', Number(value.value));
          break;
      }
      this.selectedIndex = null;
    }

  },
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

.confirm-enter-active,
.confirm-leave-active {
  transition: all 0.3s ease;
}

.confirm-enter-from,
.confirm-leave-to {
  opacity: 0;
  transform: translateY(100px);
}


main {
  background-color: #ffd7ba;
}

.interact {
  @include absolute(initial, 0, 80px, 0);
  @include flex(row, center, stretch, nowrap);
  background-color: rgba(128, 128, 128, 0.214);
  height: 70px;
  backdrop-filter: blur(5px);
}

.food-scroll {
  @include flex(row, flex-start, center, nowrap);
  gap: 40px;
  overflow-x: overlay;
  overflow-y: hidden;
  padding: 0 15px;
}

.arrow {
  position: absolute;
  height: 70px;
  width: 40px;
  border: none;
  background-color: #00000023;
  color: #fff;
  z-index: 200;

  @include flex(row, center, center, nowrap);

  display: none;

  transition: background-color 0.4s ease-out;

  span {
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    background-color: #00000040;
  }

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }

}

.left:hover span {
  transform: translateX(-5px);
}

.left:active span {
  transform: translateX(-5px) scale(0.7);
}

.right:hover span {
  transform: translateX(5px);
}

.right:active span {
  transform: translateX(5px) scale(0.7);
}

.food-item {
  position: relative;
  @include flex(column, center, center, nowrap);
  // width: 80px;
  // min-width: 80px;
  // max-width: 80px;
  flex: 1;
  cursor: default;

  &:hover {
    span {
      color: #fff;
    }
  }

}

.tag {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.food-selected .tag {
  opacity: 0;
}


.confirm {
  @include flex(row, space-between, stretch, nowrap);
  width: 85px;
  height: 50px;
  // background-color: rgba(255, 255, 255, 0.281);
  position: absolute;

  // border-radius: 5px;
  // overflow: hidden;

  button {
    border: none;
    flex: 1;

    &:first-child {
      background-color: #8FBE74;

      span {
        color: #DDEBD5;
      }

      border-radius: 5px 0 0 5px;

      &:hover {
        background-color: darken($color: #8FBE74, $amount: 10);
        color: darken($color: #DDEBD5, $amount: 10);
      }
    }

    &:last-child {
      background-color: #B3001B;

      span {
        color: #FFADBA;
      }

      border-radius: 0 5px 5px 0;

      &:hover {
        background-color: darken($color: #B3001B, $amount: 10);
        color: darken($color: #FFADBA, $amount: 10);
      }
    }
  }

  span {
    opacity: 1;
  }
}

@media only screen and (hover: hover) {
  .arrow {
    display: flex;
  }

  .food-item {

    &:first-child {
      margin-left: 40px;
    }

    &:last-child {
      margin-right: 40px;
    }
  }

  .food-scroll {

    scrollbar-width: thin;
    scrollbar-color: #a8a8a8 #ffffff;

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff00;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ffffffab;
      border-radius: 10px;

      // border: 3px solid #ffffff;
      &:hover {
        background-color: #ffffffdf;
      }
    }
  }
}
</style>