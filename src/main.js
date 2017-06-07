import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import 'vue-awesome/icons'
import { EventBus } from './bus'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
