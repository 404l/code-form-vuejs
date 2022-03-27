import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './app/App.vue';
import './app/shared/styles/index.scss';

Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
