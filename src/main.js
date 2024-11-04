import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from './pages/LandingPage.vue';
import LoginPage from './pages/LoginPage.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
    once: true,
});

const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
