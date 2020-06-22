import Vue from 'vue';
import VueRouter from 'vue-router';

/** Pages */
import ChatView from '../components/Pages/ChatView';
import AppView from '../components/AppView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'AppView',
        component: AppView
    },
    {
        path: '/chat',
        name: 'ChatView',
        component: ChatView
    }
];

const router = new VueRouter({
    routes,
});

export default router;