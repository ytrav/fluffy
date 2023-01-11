<template>
    <div id="settings" ref="settingsContainer" @scroll="handleScroll">
        <div id="settings-header" :class="{ 'scrolled': isScrolled }">
            <h2>Settings</h2>
            <button @click="toggleSettings">
                <mdicon name="arrow-left" /><span>Back</span>
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
        <h2 class="cat-header">Credits</h2>
        <a href="https://twitter.com/ytrav_v" target="_blank" class="settings-option">
            <div class="caption">
                <h4>ytrav</h4>
                <h5>Programming, UI/UX</h5>
            </div>
            <div class="toggle-wrap">
                <mdicon name="link" />
            </div>
        </a>
        <a href="https://tumblr.com/donutsmilk" target="_blank" class="settings-option">
            <div class="caption">
                <h4>donuts_milk</h4>
                <h5>Art, inspiration</h5>
            </div>
            <div class="toggle-wrap">
                <mdicon name="link" />
            </div>
        </a>
        <h2 class="cat-header"> Debug options</h2>
        <div class="settings-option" @click="restock">
            <div class="caption">
                <h4>Restock food</h4>
                <h5>Reset the food in the kitchen to the initial amount. Use to feed the pet without resetting progress.
                </h5>
            </div>
            <div class="toggle-wrap">
                <mdicon name="food" />
            </div>
        </div>
        <div class="setting-info">
            <mdicon name="information-outline" />
            <p>Use these debug options to help you explore the game and its features. They are not intended to be
                present in the final release.</p>
        </div>
        <div class="pusher"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false,
            lastScrollTop: 0
        }
    },
    mounted() {
        this.$refs.settingsContainer.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        this.$refs.settingsContainer.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            let st = this.$refs.settingsContainer.scrollTop;
            this.isScrolled = st > 15;
            if (st === 0) {
                this.isScrolled = false
            }
        },
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
                message: "Are you sure you want to erase all your saved progress? This will reset pet's stats, your coin balance and food in the kitchen to their initial values.",
                primaryClass: 'red',
                secondaryClass: 'normal',
                primaryAction: 'proceed',
                primaryName: 'Proceed',
                secondaryAction: 'cancel',
                secondaryName: 'Cancel',
            })
            this.$store.commit('toggleAlert');
        },
        restock() {
            this.$store.commit('setCurrentTask', 'restock');
            this.$store.commit('setAlert', {
                title: 'Restock food',
                message: "Are you sure you want to reset your current food selection to the initial one? This cannot be undone.",
                primaryClass: 'green',
                secondaryClass: 'normal',
                primaryAction: 'proceed',
                primaryName: 'Yes',
                secondaryAction: 'cancel',
                secondaryName: 'Cancel',
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

h2,
h4,
h5,
p,
span {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
}

#settings {
    @include absolute(80px, 10px, 80px, 10px);
    @include flex(column, flex-start, stretch, nowrap);
    z-index: 250;
    background-color: #fff;
    border-radius: 15px;
    padding: 0 25px;
    gap: 25px;
    overflow: overlay;

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
        scrollbar-width: thin;
        scrollbar-color: #b8b8b8 #ffffff;
    

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #ffffff00;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #b8b8b800;
        border-radius: 10px;
        border: 3px solid #ffffff00;
    }

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

    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 251;
    margin: 0 -25px 20px -25px;
    padding: 0 25px;
    box-shadow: transparent 0 0 0;
    transition: box-shadow .1s ease-out;


    &.scrolled {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    button {
        @include flex(row, center, center, nowrap);
        border: none;
        background-color: transparent;
        backdrop-filter: brightness(0.9);
        padding: 5px 10px;
        border-radius: 10px;
        transition: transform 0.03s ease-out;
        cursor: pointer;

        .mdi {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        &:hover {
            backdrop-filter: brightness(0.8);

            .mdi {
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

.cat-header {
    margin: {
        top: 35px;
        bottom: 15px;
    }

    ;

}

h2 {
    margin: {
        top: 15px;
        bottom: 15px;
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

.setting-info {
    color: #acacac;
    @include flex(column, flex-start, stretch, nowrap);
    gap: 10px;
    font-size: 0.9em;
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
        max-width: 400px;
        width: 100vw;
    }
}
</style>