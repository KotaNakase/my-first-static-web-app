import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
// import b-table
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false
Vue.config.silent = false;
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
