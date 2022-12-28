<template>
  <main>
    <img src="./../assets/bunny.png" alt="bunny">
    <div class="interact">
      <div class="food-scroll">
        <div class="food-item" v-for="food in foodList" :key="food">
          <mdicon :name="food.icon" />
          <span>{{ food.name }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      foodList: [
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
        {
          name: 'Apple',
          icon: 'food-apple',
        },
      ]
    }
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
  @include flex(column, center, center, nowrap);
}
</style>