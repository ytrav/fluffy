<template>
    <div id="settings">
        <h2>Settings</h2>
        <div class="settings-option" @click="commitSetting('arrows')" >
            <div class="caption">
                <h4>Scroll arrows (Experimental)</h4>
                <h5>Display arrow buttons to simplify scrolling on devices without trackpads or touchscreens: {{
                    $store.state.settings.showArrows
                }}</h5>
            </div>
            <div class="toggle-wrap">
                <input id="arrowButtons" name="arrowButtons" type="checkbox"
                class="toggle" v-model="$store.state.settings.showArrows">
            </div>


        </div>
        <button style="display: none" @click="toggleSettings">back</button>
    </div>
</template>

<script>
export default {
    methods: {

        toggleSettings() {
            this.$store.commit('toggleSettings');
        },
        commitSetting(setting) {
            this.$store.commit('changeSettings', setting);
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

#settings {
    @include absolute(100px, 10px, 100px, 10px);
    @include flex(column, flex-start, stretch, nowrap);
    z-index: 250;
    background-color: #fff;
    // backdrop-filter: blur(14px) brightness(0.8) grayscale(0.5);
    border-radius: 15px;
    padding: 25px;
}

#settings.kitchen {
    background-color: #ffd7ba;
}
#settings.bathroom {
    background-color: #A2D2FF;
}
#settings.playroom {
    background-color: #adf7b6;
}
#settings.bedroom {
    background-color: #CDB4DB;
}

.settings-option {
    cursor: pointer;


    @include flex(row, space-between, center, nowrap);
    .caption {
        @include flex(column, stretch, flex-start, nowrap);
    }
}

h2 {
    margin-bottom: 50px;
}

h4 {
    font-weight: 500;
}

h5 {
    font-weight: 450;
    color: #262626
}

// checkbox style

.toggle-wrap {
    flex: 1;
    flex-shrink: 0;
}



input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
}

input[type=checkbox]:focus {
    outline: 0;
}

.toggle {
    height: 32px;
    width: 52px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: 0;
    border: 2px solid #474755;
    background: linear-gradient(180deg, #2D2F39 0%, #1F2027 100%);
    transition: all 0.2s ease;
}

.toggle:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
}

.toggle:checked {
    border-color: #654FEC;
}

.toggle:checked:after {
    transform: translatex(20px);
}
</style>