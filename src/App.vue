<template>

  <div id="app" v-bind:class="{ 'experience-active': experience, 'loaded': loaded }">

    <div id="bg"></div>

    <Header />

    <transition name="fade">
        <Entry v-if="!experience" v-on:start_experience="startExperience" />
    </transition>

    <transition name="fade2" >
        <Experience v-if="experience" v-bind:class="{ 'animate-experience': animateExperience }" />
    </transition>

    <Disclaimer />
  
  </div>

</template>

<script>
import Header from './components/layout/Header';
import Entry from './components/pages/Entry';
import Experience from './components/pages/Experience';
import Disclaimer from './components/ui/Disclaimer';

export default {
    data() {
        return {
            loaded: false,
            experience: false,
            animateExperience: false,
            bg: {
                moveX: null,
                moveY: null
            }
        }
    },
    components: {
        Header,
        Entry,
        Experience,
        Disclaimer
    },
    mounted() {
        this.loaded = true;
    },
    methods: {
        startExperience(value) {
            this.experience = value;
            document.getElementById('bg').removeAttribute('style');
            document.documentElement.classList.add('fixed');
            setTimeout(() => { this.animateExperience = true }, 500);
        },
        changeMousePos(e){
            if (window.innerWidth < 1200 || this.experience) return
            
            this.bg.moveX = (e.clientX * -1/15);
            this.bg.moveY = (e.clientY * -1/15);
           
            document.getElementById('bg').style.backgroundPosition = `${this.bg.moveX}px ${this.bg.moveY}px`;
        },

    }
}
</script>

<style lang="scss" scoped>

#app {
    //overflow: hidden;
}

#app,
#bg {
    height: 100%;
}

#bg {
    background-image: url(assets/img/page-bg.jpg);
    background-position: center;
    background-size: cover;
    position: fixed;
    transform: scale(1.3);
    width: 100vw;
    z-index: -1;

    .experience-active & {
        background-image: url(assets/img/experience-bg.jpg);

        &:after {
            background-color: rgba(0,0,0,0.6);
            content: "";
            display: inline-block;
            height: 100%;
            position: absolute;
            width: 100%;
        }
    }
}

</style>
