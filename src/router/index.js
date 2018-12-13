import VueRouter from 'vue-router'
import Routes from './routes'
import Vue from 'vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes: Routes,
    mode: 'history'
})