import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import KontakView from '../views/KontakView.vue';
import BeritaView from '../views/BeritaView.vue';
import PengumumanView from '../views/PengumumanView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/KontakView',
    name: 'KontakView',
    component: KontakView,
  },
  {
    path: '/BeritaView',
    name: 'BeritaView',
    component: BeritaView,
  },
  
  {
    path: '/PengumumanView',
    name: 'PengumumanView',
    component: PengumumanView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
