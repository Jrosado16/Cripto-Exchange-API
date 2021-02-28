import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home'
import About from './views/About'
import PxError from './views/Error'
import CoinDetail from './views/CoinDetail'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/coin/:id',
            name: 'coin-detail',
            component: CoinDetail
        },
        {
            path: '*',
            name: 'Error',
            component: PxError
        }
    ]
})
