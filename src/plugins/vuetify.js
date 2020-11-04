import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import dark from './dark_theme';
import light from './light_theme';
import Carousel3d from 'vue-carousel-3d';

Vue.use(Vuetify);
Vue.use(Carousel3d);

export default new Vuetify({
    theme: {
        dark_themes: {dark},
        light_themes: {light},
    }
});
