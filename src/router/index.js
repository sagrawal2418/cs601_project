import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: 'Home'
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    meta:{
      title: 'Experience'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Experience.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    meta:{
      title: 'Contact'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    meta:{
      title: 'Projects'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
