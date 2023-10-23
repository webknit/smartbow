module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/sass/mixins.scss";
                    @import "@/assets/sass/core.scss";
                    @import "@/assets/sass/elements.scss";
                    @import "@/assets/sass/animations.scss";
                    @import "@/assets/sass/layout.scss";
                    @import "@/assets/sass/slider.scss";
                    @import "@/assets/sass/utilities.scss";

                `
            }
        }
    }
};