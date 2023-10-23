<template>

    <transition name="fade">

        <div class="c-modal" v-if="modalActive" id="modal">

            <div class="c-modal__box">

                <h2>EXPERIENCE SMARTBOW ON A FARM LIKE YOURS</h2>

                <p>On farms like yours, there are many cows that <i>could</i> require your attention. But which ones <i>should</i> you prioritize? SMARTBOW helps inform this decision. Hover over the herd to discover some of these attention-getters and activate SMARTBOW to see the opportunities it unlocks.</p>

                <button class="e-btn u-mb-0" @click="closeModal">Continue</button>

            </div>
        
        </div>

    </transition>

</template>

<script>


export default {
    props: ['modalActive'],
    methods: {
        closeModal() {
            this.$emit('close_modal')
        }
    }
}
</script>

<style scoped lang="scss">

    .c-modal {
        background: rgba(0,0,0,0.8);
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
        
        &__box {
            background: rgba(255, 255, 255, 0.94);
            border-radius: 10px;
            box-shadow: 50px 50px 50px rgba(0,0,0,0.5);
            left: 50%;
            max-width: 600px;
            padding: 1.2rem;
            position: absolute;
            text-align: center;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            z-index: 98;

            @include breakpoint(medium) {
                padding: 2rem;
            }
        }

        p, h2 {
            color: #707070;
        }

        h2 {
            font-size: 1.3rem;

            @include breakpoint(medium) {
               font-size: 1.75rem; 
            }
        }
    }

</style>
