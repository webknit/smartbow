<template>

    <div class="c-header">

        <div class="c-header__container">

            <div class="c-header__logo" aria-label="Smartbow">
                <svg aria-hidden="true"  data-name="Group 4725" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.04 33.6"><path data-name="Path 3999" d="M22.43 15.57a9.65 9.65 0 00-3.05-2.45 8.38 8.38 0 00-3.89-.93h-2.63a11.63 11.63 0 01-3.47-.34 1.46 1.46 0 01-1-1.52c0-1.44.93-2.12 2.71-2.12h12.6V0H8.46a6.59 6.59 0 00-3.38.93 8.25 8.25 0 00-2.79 2.29A13.74 13.74 0 00.59 6.6 12 12 0 000 10.49a10.12 10.12 0 00.68 3.81 12.12 12.12 0 002 3.38 9.9 9.9 0 003 2.38 7.43 7.43 0 003.55.84h4a6.17 6.17 0 012.54.51A1.63 1.63 0 0116.84 23a1.65 1.65 0 01-1.19 1.69 9.26 9.26 0 01-2.87.34H0v8.38h16.76a6.47 6.47 0 003.38-.85 8.61 8.61 0 002.62-2.37 11.67 11.67 0 001.7-3.38 12 12 0 00.59-3.81 12.64 12.64 0 00-.68-3.9 14.58 14.58 0 00-1.94-3.55" fill="#fff"/><path data-name="Path 4000" d="M85.81 0l9.39 25.05H84.79L90 12.61h-8.76l-8 20.82h33.35L94.53 0z" fill="#fff"/><path data-name="Rectangle 13785" fill="#fff" d="M110.1 12.61h8.29v20.82h-8.29z"/><path data-name="Path 4001" d="M135.06 10.49a11.29 11.29 0 00-.76-4.14 10.84 10.84 0 00-2.12-3.3A9.34 9.34 0 00129 .85a10 10 0 00-3.89-.76H110v8.29h15.07a1.34 1.34 0 011.18.67 2.26 2.26 0 01.42 1.44 2.81 2.81 0 01-.42 1.44 1.46 1.46 0 01-1.18.68h-4.24v8.29l4.83 12.53h9.39L129.22 19a9.08 9.08 0 005.84-8.55" fill="#fff"/><path data-name="Rectangle 13786" fill="#fff" d="M138.02.09h24.96v8.29h-24.96z"/><path data-name="Rectangle 13787" fill="#fff" d="M146.4 12.61h8.38v20.82h-8.38z"/><path data-name="Rectangle 13788" fill="#fff" d="M44.85 12.69h8.29v20.82h-8.29z"/><path data-name="Rectangle 13789" fill="#fff" d="M61.52 16.67h8.29v16.76h-8.29z"/><path data-name="Rectangle 13790" fill="#fff" d="M28.1 16.67h8.38v16.76H28.1z"/><path data-name="Path 4002" d="M191.59 10.49a10.38 10.38 0 00-.76-4 10.84 10.84 0 00-2.12-3.3A10.89 10.89 0 00185.5.93a8.62 8.62 0 00-3.9-.84h-15v8.29h15a1.59 1.59 0 011.27.67 2.29 2.29 0 010 2.88 1.52 1.52 0 01-1.27.59h-15v8.38h15a1.63 1.63 0 011.27.68 2.29 2.29 0 010 2.88 1.52 1.52 0 01-1.27.59h-15v8.38h15a9 9 0 003.9-.85 12.33 12.33 0 003.21-2.28 9.63 9.63 0 002.12-3.3 10.87 10.87 0 00.76-4 12.19 12.19 0 00-.42-3.3 11.49 11.49 0 00-1.61-3 10.32 10.32 0 001.61-3 9.66 9.66 0 00.42-3.3" fill="#6bbe4a"/><path data-name="Path 4003" d="M223.24 5A17.15 17.15 0 00211.48.09a15 15 0 00-6.43 1.35 16.52 16.52 0 00-5.33 3.64 17.84 17.84 0 00-3.64 5.33 16.55 16.55 0 00-1.36 6.43 15.16 15.16 0 001.36 6.43 16.52 16.52 0 003.64 5.33 17.84 17.84 0 005.33 3.64 16.36 16.36 0 006.43 1.35 15 15 0 006.43-1.35 16.52 16.52 0 005.33-3.64 18 18 0 003.64-5.33 16.36 16.36 0 001.35-6.43 15.44 15.44 0 00-1.35-6.52A18.15 18.15 0 00223.24 5m-4.15 15a8.38 8.38 0 01-4.4 4.4 7.91 7.91 0 01-3.21.68 8.39 8.39 0 01-8.3-8.29 8.68 8.68 0 01.68-3.22 8 8 0 011.78-2.62 9.94 9.94 0 012.62-1.87 8 8 0 016.43 0 8.42 8.42 0 012.63 1.87 9 9 0 011.77 2.62 7.91 7.91 0 010 6.43" fill="#6bbe4a"/><path data-name="Path 4004" d="M63.13 3A23.75 23.75 0 0056.45.85a42.45 42.45 0 00-7.37-.68c-1.61 0-3.3.08-5 .25a29.1 29.1 0 00-4.82.93A22 22 0 0035 3a15.18 15.18 0 00-3.6 2.33A10.88 10.88 0 0029 8.55a8.75 8.75 0 00-.77 3.3h9.23C39.1 9.56 43 8.46 49.08 8.46a40.91 40.91 0 014.57.26 13.83 13.83 0 014.06 1 7.79 7.79 0 012.88 1.95c.09.08.09.17.17.25h9.14A9.54 9.54 0 0068 6.85 13.13 13.13 0 0063.13 3" fill="#6bbe4a"/><path data-name="Rectangle 13791" fill="#6bbe4a" d="M249.05 5.84h8.29v15.49h-8.29z"/><path data-name="Path 4005" d="M265.55 19c0 4.15-4.14 6.27-12.52 6.27S240.59 23.1 240.59 19V.25h-8.38v20.82a8.76 8.76 0 001.86 5.76 14.72 14.72 0 004.83 3.89 26.06 26.06 0 006.68 2.2 44.3 44.3 0 007.45.68 45.36 45.36 0 007.45-.68 25.75 25.75 0 006.68-2.12 13.69 13.69 0 004.84-3.89 9.11 9.11 0 001.87-5.84V.25h-8.38V19z" fill="#6bbe4a"/><path data-name="Path 4006" d="M279.77 3.22v-.17a.89.89 0 00-.08-.43l-.26-.25.26-.25c.08-.09.08-.17.08-.34s0-.26-.08-.34-.09-.17-.17-.25-.17-.09-.34-.17a3 3 0 00-.43-.09h-.84v2.62h.51v-.93h.5c.17 0 .26 0 .34.09s.09.17.09.34v.59h.51v-.17c0-.09-.09-.17-.09-.25M279.26 2a.09.09 0 01-.08.09c-.09 0-.09.08-.17.08h-.59v-.73h.67c.09 0 .09 0 .17.08l.09.09v.17c0 .17 0 .17-.09.25" fill="#6bbe4a"/><path data-name="Path 4007" d="M281 1.78c-.09-.17-.09-.43-.26-.6a1.85 1.85 0 00-.34-.5 1.37 1.37 0 00-.42-.34l-.51-.26a2.15 2.15 0 00-1.18 0l-.51.26a1.53 1.53 0 00-.42.34 1.07 1.07 0 00-.34.5 4 4 0 00-.26.6 1.32 1.32 0 00-.08.59 1.32 1.32 0 00.08.59c.09.17.09.42.26.59a1.57 1.57 0 00.34.51 1.4 1.4 0 00.42.34l.51.25a1.49 1.49 0 00.59.09 2.79 2.79 0 00.85-.17 1.31 1.31 0 00.67-.51 2.81 2.81 0 00.51-.76 3.25 3.25 0 00.17-.93c0-.17-.09-.42-.09-.59m-.33 1.1c-.09.17-.09.34-.17.42s-.17.25-.26.42l-.34.34c-.17.09-.25.17-.42.17a1.1 1.1 0 01-.51.09 1.75 1.75 0 01-.67-.17 1.51 1.51 0 01-.6-.43 3.51 3.51 0 01-.42-.59 2.47 2.47 0 01-.17-.76 2.47 2.47 0 01.17-.76 1.56 1.56 0 01.42-.59 1.51 1.51 0 01.6-.43 2.2 2.2 0 01.67-.17 1.1 1.1 0 01.51.09c.17.08.34.08.42.17a.6.6 0 01.34.34 1.64 1.64 0 01.26.42 1.94 1.94 0 01.17.42 1.27 1.27 0 01.08.51 1 1 0 00-.08.51" fill="#6bbe4a"/></svg>
            </div>

            <div class="c-header__btns">
                <ExtLink url="https://www.smartbow.com/" text="Smartbow website"></ExtLink>
                <ExtLink url="http://google.com" text="A day in the life"></ExtLink>
            </div>

        </div>
    
    </div>

</template>

<script>

import ExtLink from '../ui/ExtLink';

export default {
    components: {
        ExtLink
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$header-break: 550px;

.c-header {
    background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(125,185,232,0) 100%);
    opacity: 0;
    transition: opacity 0.3s 0.3s;

    .loaded & {
        opacity: 1;
    }

    @include breakpoint($header-break) {
        flex-direction: column-reverse;
        margin-bottom: 2rem;
    }

    @include breakpoint(large) {
        margin-bottom: 4rem;
    }

    &__container {
        border-bottom: 1px solid white;
        align-items: center;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        padding: 0rem 0 1.5rem;
        width: 100%;

        @include breakpoint($header-break) {
            flex-direction: row;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 1500px;
            padding: 1rem 0;
            width: 98%;
        }
    }

    &__logo {
        max-width: 300px;
        width: 50%;

        @include breakpoint(400px) {
            height: 20px;
            width: 200px;
        }

        @include breakpoint($header-break) {
            margin-top: 0;
        }

        @include breakpoint(large) {
            height: 30px;
            margin-left: 2rem;
            width: 250px;
        }
    }

    &__btns {
        display: flex;
        margin-bottom: 1.5rem;
        width: 100%;

        @include breakpoint($header-break) {
            margin-bottom: 0;
            width: auto;
        }

        a {
            font-size: 0.9rem;
            justify-content: center;
            padding: 0.5rem;
            width: 50%;

            @include breakpoint($header-break) {
                margin-left: 0.5rem;
                width: auto;
            }

            @include breakpoint(large) {
                font-size: 1rem;
                margin-left: 1rem;
                padding: 1rem;
            }

            &:first-child {
                border-right: none;

                @include breakpoint($header-break) {
                    border-right: 1px solid white;
                }
            }
        }
    }
}

</style>
