<template>
    <nav>
        <router-link @click="iconType(button.title)" v-for="button in nav" :key="button" :to="button.path">
            <mdicon :name="button.icon + iconType(button.title)" size="30" />{{ button.title }}
        </router-link>

    </nav>
</template>

<script>
export default {
    methods: {
        iconType(name) {
            if (this.$route.path === '/'+name.toLowerCase()) {
                return '';
            } else {
                return '-outline';
            }
        }
    },
    data() {
        return {
            nav: [
                {
                    title: 'Kitchen',
                    path: '/kitchen',
                    icon: 'fridge',
                },
                {
                    title: 'Bathroom',
                    path: '/bathroom',
                    icon: 'paper-roll',
                },
                {
                    title: 'Playroom',
                    path: '/playroom',
                    icon: 'gamepad-variant',
                },
                {
                    title: 'Bedroom',
                    path: '/bedroom',
                    icon: 'bed',
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


nav {
    height: 70px;
    // border: 2px solid $pink;
    // border-style: solid none none none;
    padding: 10px;
    // background-color: $purple;
    -webkit-backdrop-filter: brightness(0.9);
    backdrop-filter: brightness(0.9);

    @include flex(row, space-between, center, nowrap);
    @include absolute(auto, 0, 0, 0);
}

a {
    text-decoration: none;
    color: initial;
    @include flex(column, center, center, nowrap);
    transition: color 0.1s ease;

    &:active {
        color: #f5f5f5;
        
    }
}

.router-link-active {
    color: #fff;
}

@media only screen and (min-width: 768px) {
    nav {
        justify-content: center;
        gap: 40px;
    }
}
</style>