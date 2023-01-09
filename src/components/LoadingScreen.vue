<template>
    <div id="loading">
        <h2>fluffy</h2>
        <!-- <h3>by ytrav</h3> -->
        <div class="box">
            <div class="container">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
        </div>
    </div>
</template>

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

#loading {
    @include absolute(0, 0, 0, 0);
    @include flex(column, center, center, nowrap);
    background-color: $purple;
    z-index: 300;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.box {
    width: 300px;
    height: 100px;
    // background: $pink;
    display: flex;
    justify-content: center;
    align-items: center;
    // box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
}

h2 {
    font-family: 'Shadows Into Light', cursive;
    font-weight: normal;
    font-size: 3em;
    color: #fff;
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

h3 {
    // font-family: 'Shadows Into Light', cursive;
    font-weight: normal;
    font-size: 1em;
    color: #fff;
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

.container {
    height: 15px;
    width: 105px;
    display: flex;
    position: relative;

    .circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
        animation: move 500ms linear 0ms infinite;
        margin-right: 30px;

        &:first-child {
            position: absolute;
            top: 0;
            left: 0;
            animation: grow 500ms linear 0ms infinite;
        }

        &:last-child {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 0;
            animation: grow 500ms linear 0s infinite reverse;
        }
    }
}

@keyframes grow {
    from {
        transform: scale(0, 0);
        opacity: 0;
    }

    to {
        transform: scale(1, 1);
        opacity: 1;
    }
}

@keyframes move {
    from {
        transform: translateX(0px)
    }

    to {
        transform: translateX(45px)
    }
}
</style>
