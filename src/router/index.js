import Index from '@/pages/frontend/Index.vue'
import {createRouter,createWebHistory} from "vue-router";
import login from "@/pages/admin/login.vue";
import AdminIndex from '@/pages/admin/index.vue'
import Admin from "@/layouts/admin/admin.vue";

import AdminArticleList from '@/pages/admin/article-list.vue'
import AdminCategoryList from '@/pages/admin/category-list.vue'
import AdminTagList from '@/pages/admin/tag-list.vue'
import AdminBlogSetting from '@/pages/admin/blog-setting.vue'

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
    },

    {
        path: "/admin", // 后台首页
        component: Admin, // 对应 admin.vue 布局文件
        // 使用到 admin.vue 布局的，都需要放置在其子路由下面
        children: [
            {
                path: "/admin/index",
                component: AdminIndex, // 主内容区域，具体需要渲染的页面
                meta: {
                    title: 'Admin 后台首页'
                }
            },
            {
                path: "/admin/article/list",
                component: AdminArticleList,
                meta: {
                    title: '文章管理'
                }
            },
            {
                path: "/admin/category/list",
                component: AdminCategoryList,
                meta: {
                    title: '分类管理'
                }
            },
            {
                path: "/admin/tag/list",
                component: AdminTagList,
                meta: {
                    title: '标签管理'
                }
            },
            {
                path: "/admin/blog/setting",
                component: AdminBlogSetting,
                meta: {
                    title: '博客设置'
                }
            },
        ]

    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router