import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import * as components from '../composables/index'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'vue_use_polyfill' }
  }
]

function generateRoutes(routes: { 
                                  path: string,
                                  name: string,
                                  component: any,
                                  meta: {
                                    title: string
                                  }
                                }[]) {
  for (let name of Object.keys(components)) {
    routes.push({
      path: `/${name}`,
      name: name,
      component: import(`../views/${name}.vue`),
      meta: {
        title: name
      }
    })
  }
  return routes
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generateRoutes(routes)
})

router.afterEach((to, from) => {
  document.title = to.meta.title as string
})

export default router
