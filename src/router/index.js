import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: 'theme',
        path: '/',
        component: () => import('../components/Theme.vue'),
        redirect: 'home',
        children: [
            {
                name: 'home',
                path: '/',
                component: () => import('../views/Home.vue')
            },
            {
                name: 'post',
                path: '/post/:slug',
                component: () => import('../views/Post.vue')
            },
            {
                name: 'tag',
                path: '/tag',
                component: () => import('../views/Tag.vue')
            },
            {
                name: 'tag_detail',
                path: '/tag/:slug',
                component: () => import('../views/TagDetail.vue')
            },
            {
                name: 'about',
                path: '/about',
                component: () => import('../views/About.vue')
            },
            {
                name: 'search',
                path: '/search',
                component: () => import('../views/Search.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
