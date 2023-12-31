import {
  createRouter,
  createWebHistory
} from "vue-router";
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create-product',
      component: import('../views/CreateProduct.vue'),
    },
    {
      path: '/edit:id',
      name: 'edit-product',
      component: import('../views/CreateProduct.vue'),
    }
  ]
})
export default router