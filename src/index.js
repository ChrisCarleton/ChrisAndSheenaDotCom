import App from './components/app.vue';
import routes from './routes';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (render) => render(App),
}).$mount('#app');
