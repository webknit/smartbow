<template>

    <a :href="url">
        <span>{{text}}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g data-name="Group 4709"><path data-name="Path 3971" d="M13.126 3.427h-2.3a.541.541 0 010-1.082h3.608a.541.541 0 01.541.541v3.609a.541.541 0 11-1.082 0v-2.3l-6.294 6.29a.541.541 0 11-.765-.765zm-5.188.18a.525.525 0 110 1.05c-1.309 0-2.284 0-2.97.081a2.029 2.029 0 00-1.246.427 2.03 2.03 0 00-.427 1.247c-.077.686-.08 1.66-.08 2.968s0 2.281.083 2.967a2.032 2.032 0 00.43 1.247 2.035 2.035 0 001.247.427c.685.077 1.658.081 2.962.081s2.277 0 2.962-.082a2.034 2.034 0 001.247-.429 2.033 2.033 0 00.43-1.247c.079-.685.083-1.659.083-2.964a.525.525 0 111.05 0 29.644 29.644 0 01-.09 3.083 3 3 0 01-.731 1.871 3 3 0 01-1.872.73 29.784 29.784 0 01-3.08.089 30.094 30.094 0 01-3.08-.087 3 3 0 01-1.871-.728 3 3 0 01-.733-1.871 29.76 29.76 0 01-.087-3.086 30.339 30.339 0 01.087-3.086 2.99 2.99 0 01.726-1.871 2.993 2.993 0 011.871-.729 30.227 30.227 0 013.089-.087z" fill="#fff" fill-rule="evenodd"/></g></svg>
    </a>

</template>

<script>


export default {
    props: ['url', 'text'],
}
</script>

<style scoped lang="scss">

a {
    align-items: center;
    border: 1px solid white;
    color: white;
    display: inline-flex;
    line-height: 1;
    padding: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.3s, border-color 0.3s;

    &:hover,
    &:focus {
        border-color: #3C9432;
        color: #3C9432;

        svg {
            path {
                fill: #3C9432;
            }
        }
    }

    svg {
        height: 17px;
        margin-left: 0.5rem;
        width: 17px;
    }
}

</style>
