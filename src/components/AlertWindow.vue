<template>
    <div id="alert">
        <div id="alert-heading">
            <h2>{{ $store.state.alert.title }}</h2>
            <p>{{ $store.state.alert.message }}</p>
        </div>
        <div id="alert-buttons">
            <button @click="action($store.state.alert.secondaryAction)" :class="$store.state.alert.secondaryClass">{{ $store.state.alert.secondaryName }}</button>
            <button @click="action($store.state.alert.primaryAction)" :class="$store.state.alert.primaryClass">{{ $store.state.alert.primaryName }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Reset progress',
            message: "Are you sure you want to erase all your saved progress. This will reset pet's stats, your coin balance and food in the kitchen to the initial values.",
            primaryAction: 'Proceed',
            secondaryAction: 'Cancel',
            primaryClass: 'red',
            secondaryClass: 'normal',
        }
    },
    methods: {
        action(actionName) {
            switch (actionName) {
                case 'cancel':
                    this.$store.commit('toggleAlert');
                    this.$store.commit('setCurrentTask', null);
                    break;
                case 'proceed':
                    console.log('proceeeeed');
                    this.$emit('proceed');
                    break
                default:
                    break;
            }
        },
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

</style>