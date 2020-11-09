import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import animated from 'animate.css';

Vue.use(SequentialEntrance);
Vue.use(animated);
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
