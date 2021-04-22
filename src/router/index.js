import Vue from 'vue'
import VueRouter from 'vue-router'
import Show from '../views/Show.vue'
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/Show',
    component: Show
  },
  {
    path: '/pageOne',
    component: PageOne
  },
  {
    path: 'pageTwo',
    component: PageTwo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
