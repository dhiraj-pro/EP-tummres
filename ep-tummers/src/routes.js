import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue'

const router = new VueRouter({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
  ]
})

export default router;
Vue.use(VueRouter);
Vue.use(router);
