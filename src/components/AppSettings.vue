<template>
    <div id="settings">
        <div id="settings-header">
            <h2>Settings</h2>
            <button @click="toggleSettings">
                <mdicon name="arrow-left" /> Back
            </button>
        </div>
        <div class="settings-option" @click="commitSetting('arrows')">
            <div class="caption">
                <h4>Scroll arrows</h4>
                <h5>Display arrow buttons to simplify scrolling on devices without touch support. Only affects mouse
                    users.</h5>
            </div>
            <div class="toggle-wrap">
                <input id="arrowButtons" name="arrowButtons" type="checkbox" class="toggle"
                    v-model="$store.state.settings.showArrows">
            </div>
        </div>
        <div class="settings-option" @click="reset">
            <div class="caption">
                <h4>Reset progress</h4>
                <h5>Want to start from scratch? This action cannot be undone.</h5>
            </div>
            <div class="toggle-wrap">
                <mdicon name="restore-alert" />
            </div>
        </div>
        <a href="https://github.com/ytrav/fluffy" target="_blank" class="settings-option"
            @click="commitSetting('arrows')">
            <div class="caption">
                <h4>View the source code</h4>
                <h5>All source code for Fluffy is available on GitHub.</h5>
            </div>
            <div class="toggle-wrap">
                <mdicon name="link" />
            </div>
        </a>
        <h2>Credits</h2>
        <a href="#" class="settings-option" @click="commitSetting('arrows')">
            <div class="caption">
                <h4>ytrav</h4>
                <h5>Programming, UI/UX</h5>
            </div>
            <div class="toggle-wrap">
                <mdicon name="link" />
            </div>
        </a>
        <a href="#" class="settings-option" @click="commitSetting('arrows')">
            <div class="caption">
                <h4>donuts_milk</h4>
                <h5>Art, inspiration</h5>
            </div>
            <div class="toggle-wrap">
                <mdicon name="link" />
            </div>
        </a>
        <div class="pusher"></div>
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
        },
        reset() {
            this.$store.commit('setCurrentTask', 'reset');
            this.$store.commit('setAlert', {
                title: 'Reset progress',
                message: "Are you sure you want to erase all your saved progress. This will reset pet's stats, your coin balance and food in the kitchen to the initial values.",
                primaryAction: 'proceed',
                primaryName: 'Proceed',
                secondaryAction: 'cancel',
                secondaryName: 'Cancel',
                primaryClass: 'red',
                secondaryClass: 'normal',
            })
            this.$store.commit('toggleAlert');
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

#settings {
    @include absolute(100px, 10px, 100px, 10px);
    @include flex(column, flex-start, stretch, nowrap);
    z-index: 250;
    background-color: #fff;
    // backdrop-filter: blur(14px) brightness(0.8) grayscale(0.5);
    border-radius: 15px;
    padding: 0 25px;
    gap: 25px;
    overflow: auto;

    .pusher {
        margin-bottom: 100px;
    }
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

#settings-header {
    @include flex(row, space-between, center, wrap);

    button {
        @include flex(row, center, center, nowrap);
        border: none;
        background-color: transparent;
        backdrop-filter: brightness(0.9);
        padding: 5px 10px;
        border-radius: 10px;
        transition: transform 0.03s ease-out;
        cursor: pointer;

        span {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        &:hover {
            backdrop-filter: brightness(0.8);

            span {
                transform: translateX(-5px);
            }
        }

        &:active {
            transform: scale(0.98);
        }
    }
}

.settings-option {
    cursor: pointer;

    gap: 50px;


    @include flex(row, space-between, center, nowrap);

    .caption {
        @include flex(column, stretch, flex-start, nowrap);
    }
}

h2 {
    margin: {
        top: 25px;
        bottom: 25px;
    }

    ;
}

h4 {
    font-weight: 500;
}

h5 {
    font-weight: 450;
    color: #262626;
}

// checkbox style

.toggle-wrap {
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
    border-color: rgb(18, 170, 18);
}

.toggle:checked:after {
    transform: translatex(20px);
}

@media only screen and (min-width: 768px) {
    #settings {
        @include absolute(100px, auto, 100px, auto);
        max-width: 370px;
        width: 100vw;
    }
}
</style>