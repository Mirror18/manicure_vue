import Index from '@/pages/frontend/Index.vue'
import {createRouter,createWebHistory} from "vue-router";
import login from "@/pages/admin/login.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index,
        meta:{
            title: 'manicure首页'
        }
    },

    {
        path: '/login',
        // component: login,
        component: ()=>import('@/pages/admin/login.vue'),
        meta: {
            title: 'manicure登录页'
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router