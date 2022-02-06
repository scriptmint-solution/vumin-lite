import { createRouter, createWebHistory } from "vue-router"
import AuthLayout from '@layouts/Auth.vue'
import GuestLayout from '@layouts/Guest.vue'
import ErrorLayout from '@layouts/Error.vue'

import Login from '@components/Pages/Login.vue'
import Register from '@components/Pages/Register.vue'
import Password from '@components/Pages/Password.vue'
import Dashboard from '@components/Pages/Dashboard.vue'
import Table from '@components/Pages/Table.vue'
import Form from '@components/Pages/Form.vue'
import Card from '@components/Pages/Card.vue'
import Error404 from '@components/Pages/Error404.vue'

const baseURL = '/'

const routes = [
    {
        path: '/',
        name: 'Auth',
        component: AuthLayout,
        redirect: { name: 'Dashboard' },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: 'table',
                name: 'Table',
                component: Table,
            },
            {
                path: 'form',
                name: 'Form',
                component: Form,
            },
            {
                path: 'card',
                name: 'Card',
                component: Card,
            },
        ]
    },
    {
        path: '/',
        name: 'Guest',
        component: GuestLayout,
        redirect: { name: 'Login' },
        children: [
            {
                path: 'login',
                name: 'Login',
                component: Login,
            },
            {
                path: 'register',
                name: 'Register',
                component: Register,
            },
            {
                path: 'password',
                name: 'Password',
                component: Password,
            },
        ]
    },
    {
        path: '/',
        name: 'Error',
        component: ErrorLayout,
        children: [
            {
                path: '404',
                name: 'Error404',
                component: Error404,
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        beforeEnter: (to, from, next) => {
            next({ name: 'Error404' })
        }
    }
]

const router = createRouter({
    history: createWebHistory(baseURL),
    routes: routes
})

export default router
