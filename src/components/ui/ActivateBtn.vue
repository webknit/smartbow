<template>

    <div>

        <!-- Had to split these to get the pulse behind the cows -->

        <div class="c-activate c-activate--pulse" v-bind:class="{ 'c-activate--deactivate': smartbowActive }" v-if="!viewActive">

            <span aria-hidden="true" class="c-activate__pulse c-activate__pulse--1"></span>
            <span aria-hidden="true" class="c-activate__pulse c-activate__pulse--2"></span>
            <span aria-hidden="true" class="c-activate__pulse c-activate__pulse--3"></span>

        </div>

        <div class="c-activate" v-bind:class="{ 'c-activate--deactivate': smartbowActive }" v-if="!viewActive">

            <div aria-hidden="true" class="c-activate__shine"></div>

            <button class="c-activate__text u-link-stretch" @click="activateSmartbow">
                <span v-if="!smartbowActive">ACTIVATE<br> SMARTBOW</span>
                <span v-else>DEACTIVATE<br> SMARTBOW</span>
            </button>

        </div>

    </div>

</template>

<script>

export default {
    props: ['smartbowActive', 'viewActive'],
    data() {
        return {
            msg: 'Finding cows in heat is time consuming',
        }
    },
    methods: {
        activateSmartbow() {
			this.$emit('activate_smartbow')
        }
    }
}

</script>

<style lang="scss">

    .c-activate {
        align-items: center;
        background-color: #6ABF4B;
        border: 5px solid white;
        border-bottom: none;
        border-radius: 150px 150px 0 0;
        bottom: 161px;
        color: white;
        display: flex;
        height: 100px;
        justify-content: center;
        left: 50%;
        outline: 0;
        overflow: hidden;
        position: fixed;
        text-transform: uppercase;
        transform: translateX(-50%);
        transition: background-color 0.3s;
        width: 200px;
        z-index: 10;

        &:hover {
            background-color: #3C9432;
        }

        &--pulse {
            overflow: visible;
            z-index: 1;
        }

        @include breakpoint(medium) {
            border: 10px solid white;
            bottom: 49px;
            height: 150px;
            width: 300px;
        }

        &--deactivate {
            background-color: #860000;

            &:hover {
                background-color: #860000;
            }
        }

        &:hover, &:focus {
            outline: 0;
        }

        &__shine {
            //border: 5px solid white;
            border-radius: 150px 150px 0 0;
            display: block;
            height: 100%;
            overflow: hidden;
            position: fixed;
            width: 100%;

            @include breakpoint(medium) {
                //border: 10px solid white;
            }

            .c-activate--deactivate & {
                display: none;
            }

            &:before{
                animation: 1.5s shine infinite linear;
                content: '';
                display: block;
                position: absolute;
                background: rgba(255,255,255,0.5);
                width: 60px;
                height: 100%;
                left: 0;
                top: 0;
                opacity: .5;
                filter: blur(30px);
                transform: translateX(-100px)  skewX(-15deg);

                .c-activate--active & {
                    display: none;
                }
            }
        }

        @keyframes shine {
            0% {
                
            }
            100% {
                transform: translateX(300px)  skewX(-15deg);  
                opacity: 0.6;
            }
        }

        &__text {
            color: white;
            font-size: 1.3rem;
            line-height: 1;
            margin-top: 10px;
            outline: 0;
            position: relative;
            text-align: center;
            z-index: 10;

            @include breakpoint(medium) {
                font-size: 2rem;
            }

            &:hover {
                outline: 0;
            }
        }

        &__pulse {
            border-radius: 150px 150px 0 0;
            bottom: 0;
            border: 1px solid #6ABF4B;
            display: block;
            height: auto;
            left: 0;
            opacity: 0;
            position: absolute;
            right: 0;    
            top: -20px;
            transform-origin: center center;
            width: 100%;

            .c-activate--deactivate & {
                display: none;
            }

            &--1 {
                animation: 4s pulse infinite linear;
            }

            &--2 {
                animation: 4s 1s pulse infinite linear;
            }

            &--3 {
                animation: 4s 2s pulse infinite linear;
            }

            &--4 {
                animation: 4s 3s pulse infinite linear;
            }
        }
    }

</style>
