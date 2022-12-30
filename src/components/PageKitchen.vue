<template>
  <main>
    <img src="./../assets/bunny.png" alt="bunny">
    <div class="interact">
      <div class="food-scroll">
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
    selectFood(index) {
      this.selectedIndex = index;
    },
    resetFood() {
      this.selectedIndex = null;
    },
    consumeFood(index, value) {
      this.$store.commit('removeFood', index);
      if (value.name === 'Coffee') {
        this.$store.commit('changeEnergy', Number(value.value));
      } else {
        this.$store.commit('changeHunger', Number(value.value));
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
}

.food-scroll {
  @include flex(row, flex-start, center, nowrap);
  gap: 20px;
  overflow-x: scroll;
  padding: 0 15px;
}

.food-item {
  position: relative;
  @include flex(column, center, center, nowrap);
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
  width: 55px;
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
</style>