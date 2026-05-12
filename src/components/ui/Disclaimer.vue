<template>

    <div class="disclamier">

        <p>Educational content only. Does not represent actual SMARTBOW user interface. 
            All trademarks are the property of Zoetis Services LLC or a related
            company or a licensor unless otherwise noted. SMARTBOW is the
            registered trademark of Zoetis Services LLC. © 2019 Zoetis Services
            LLC. All rights reserved. MM-07680
          </p>

    </div>

</template>

<style scoped lang="scss">

.disclamier {
    align-items: center;
    background-color: white;
    bottom: 0;
    display: flex;
    height: 112px;
    justify-content: center;
    padding: 0.5rem;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 101;

    @include breakpoint(medium) {
        height: 70px;
    }

    p {
        color: black;
        font-size: 0.7rem;
        margin-bottom: 0;
        max-width: 900px;

        @include breakpoint(medium) {
            //font-size: 1.1rem;
        }
    }
}

</style>
