<template>

    <!-- <button class="c-cows__item" v-tooltip.top-center="tooltipContent" v-bind:class="{ 'c-cows__item--active':  data.filter.indexOf(filter) > -1 || (filter.length === null) && data.filter }" @click="selectCow(data.id)" :tabindex="data.filter.indexOf(filter) > -1 || (filter === null) && data.filter ? '0' : '-1'"> -->
    <button class="c-cows__item" v-tooltip.top-center="tooltipContent" @click="selectCow(data.id)"  v-bind:class="{ 'c-cows__item--active':  data.filter.indexOf(filter) > -1, 'c-cows__item--has-filter': data.filter.length}" :tabindex="test(data, filter)">
        
        <span class="c-cows__pulse c-cows__pulse--1"></span>
        <span class="c-cows__pulse c-cows__pulse--2"></span>
        <span class="c-cows__pulse c-cows__pulse--3"></span>
        
        <svg class="c-cows__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.54 67.24"><path data-name="Path 4028" d="M88.7 11.31c-1.71-1.75-3.71-3.72-5.34-5.64-2-2.44-6.06-1.79-8.32-1.17a6.64 6.64 0 00-2.16-3 8 8 0 00-6.5-1.3 2 2 0 00-1.24 1c-.78 1.33-.46 4-.06 5.38a5.72 5.72 0 002.46 3.21 6.55 6.55 0 01-2.77 1.17c-7.55.57-23.12.67-33.42.73-4.8 0-8.58.06-10.32.12-5.72.2-10 1.84-12.86 4.9a12 12 0 00-1.46 1.94C3.12 21.89-1.21 29.62.37 39.14c.18 1 .34 2 .5 2.91C2.25 50 2.53 52.39-.01 54.84L2.05 57c3.76-3.64 3.08-7.58 1.73-15.41-.16-.9-.32-1.87-.5-2.9A21.4 21.4 0 014.6 27v.81a67.92 67.92 0 003.33 17.05 171.49 171.49 0 01-.05 20.53A1.48 1.48 0 009.24 67h6.4a1.48 1.48 0 001.48-1.41l.08-2.21h4.47a1.48 1.48 0 001.48-1.46l.33-12.68a6.08 6.08 0 001 .88 10.4 10.4 0 001.35.83s-.51 1.35-.84 2.05.33 1 1 1.52a1.47 1.47 0 001.88-.3 24.81 24.81 0 001.48-2.47h1.94s.23 1.71.3 2.63 1 1.15 1.75 1.15c.88 0 1.28-.2 1.28-1.22s.13-2.46.13-2.46a5.1 5.1 0 001.51-.27 5.74 5.74 0 002-.85l-4-2.5s-.33.4-1.84.59a9.91 9.91 0 01-5.43-1.16 13.61 13.61 0 01-3.85-2.93l.06-3.21a13.84 13.84 0 014 .67 17.16 17.16 0 015.46 2.38c4.22 3 8.88 7.36 19.27 6.43 3.22-.29 7.43-.21 9.09 1.15a1.72 1.72 0 01.71 1.3c.34 4.27.78 12.31.79 12.39a1.47 1.47 0 001.47 1.4h4.69a1.47 1.47 0 001.47-1.47v-1.68c-.16-2.76-.16-5.62-.16-8.45v-.9-2.82a16.94 16.94 0 01.65-4.18c.3-1 .7-2.12 1.12-3.27.92-2.5 1.88-5.09 1.75-7.33a31.26 31.26 0 00-1.33-6.5 2.55 2.55 0 01.19-1.95l.6-1.05c1.38-2.29 2.15-2.7 2.31-2.76 1.39.05 11.23.44 13.81.22s4.87-4 5.29-5.09c.86-2.21-1.74-4.8-5.68-8.7zM20.22 60.39h-2.9l.56-17a6.36 6.36 0 012.51-1.49zm68.59-38.24c-2 .18-9.77-.08-13.58-.23h-.15c-1.49.09-2.94 1.38-4.57 4a34.36 34.36 0 00-1.72 3.28 36.31 36.31 0 012 8.09c.1 1.66-.76 4-1.58 6.22-.42 1.14-.86 2.33-1.19 3.46a23.11 23.11 0 00-.74 7.45v.47l-.06 9.39h-1.86c-.14-2.52-.46-7.85-.71-11.08a4.75 4.75 0 00-1.79-3.34c-3.16-2.58-9.45-2.17-11.31-2-8.69.93-13-3.19-17.48-6.2a20 20 0 00-5.38-2.45c-9.37-3-13.3 2.32-13.46 2.54a1.42 1.42 0 00-.27.8L14.22 64h-3.3a179.57 179.57 0 000-19.55 1.44 1.44 0 00-.09-.4 66 66 0 01-3.26-16.39 13.62 13.62 0 011.42-7.15.18.18 0 00.07-.05 10 10 0 011.28-1.76c2.26-2.46 5.89-3.79 10.79-4 1.7-.06 5.47-.08 10.23-.11 10.35-.07 26-.16 33.63-.74 3-.22 6-3 6.34-3.35a1.48 1.48 0 00-.64-2.5s-2.33-.67-2.77-2.27A8.36 8.36 0 0167.63 3a5 5 0 013.47.88 4.33 4.33 0 011.45 2.67 1.44 1.44 0 00.7 1.11 1.46 1.46 0 001.3.12c2-.79 5.54-1.4 6.55-.2 1.69 2 3.73 4.05 5.53 5.84 2 2 4.68 4.65 4.94 5.64-.52 1.15-2.1 3-2.76 3.12z" fill="#fff"/></svg>

    </button>

</template>

<script>

export default {
    props: ['data', 'tooltip', 'filter', 'index'],
    data() {
        return {
            msg: 'Finding cows in heat is time consuming',
        }
    },
    computed: {
        tooltipContent () {
            return this.tooltip && {content: this.data.tooltip, trigger: 'click hover' }
        }
    },
    methods: {
        test(data, filter) {
            if(data.filter.length && filter) {
                if(data.filter.indexOf(filter) > -1) return 0;
                else return -1;
            }
            else if(!filter) {
                if(data.filter.length > 0) return 0;
                else return -1;
            }
            else return -1;
        },
        selectCow(index) {
			this.$emit('select_cow', index)
        }
    }
}

</script>

<style lang="scss">

.c-cows {

    &__item {
        cursor: pointer;
        display: inline-block;
        position: relative;
        pointer-events: none;

        .smartbow-deactive & {
            cursor: auto;
            
            &:focus {
                //outline: 0;
            }
        }

        &.has-tooltip {

           .smartbow-deactive & {
               //cursor: pointer;
           } 
        }

        &--active {
            pointer-events: auto;
        }

        &--has-filter {

            .filter-inactive & {
                pointer-events: auto;
            }
        }
    }

    &__img {
        margin: 0.5rem;
        width: 50px;

        @include breakpoint(medium) {
            height: 42px;
            margin: 1rem;
            width: 60px;
        }

        .smartbow-deactive .has-tooltip & {

            path {
                fill: #C40000;
            }
        }
    }

    &__pulse {

        .smartbow-active .c-cows__item--active &,
        .filter-inactive .smartbow-active .c-cows__item--has-filter & {
            border-radius: 100%;
            bottom: 0;
            border: 1px solid #6ABF4B;
            display: block;
            height: 60px;
            left: 50%;
            opacity: 0;
            position: absolute;
            right: 0;    
            top: 50%;
            transform: translate(-50%, -50%);
            transform-origin: center center;
            width: 60px;

            &--1 {
                animation: 4s pulseCow infinite linear;
            }

            &--2 {
                animation: 4s 1s pulseCow infinite linear;
            }

            &--3 {
                animation: 4s 2s pulseCow infinite linear;
            }

            &--4 {
                animation: 4s 3s pulseCow infinite linear;
            }
        }
    }
}

.tooltip {
  display: block !important;
  max-width: 250px;
  z-index: 12;

  .tooltip-inner {
    background: rgba(0,0,0,0.9);
    border: 1px solid #C40000;
    color: white;
    border-radius: 5px;
    padding: 5px 10px 4px;
    font-size: 0.9rem;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: red;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}

@keyframes pulseCow {
    0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: .8;
    }
    100% {
        transform: translate(-50%, -50%) scale(3) ;
        opacity: 0;
    }
}

</style>
