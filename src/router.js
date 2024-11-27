// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './pages/LandingPage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import PerfilPage from './pages/PerfilPage.vue';

const routes = [
  { path: '/', name:'LandingPage', component: LandingPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/perfil', name: 'PerfilPage', component: PerfilPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
