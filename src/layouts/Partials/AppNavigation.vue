<template>
    <ul class="text-sm">
        <li class="text-secondary hover:text-dark-secondary hover:bg-dark-primary dark:hover:bg-dark-body"
            v-for="navigation in navigations"
            :key="navigation.name"
            :class="{
                'bg-dark-primary dark:bg-dark-body': isActive(navigation)
            }"
        >
            <div
                class="cursor-pointer"
                @click="clickNavigation(navigation)"
            >
                <div class="pl-5 pr-2 py-3 flex items-center" :class="{
                    'justify-between': hasChild(navigation)
                }">
                    <div>
                        <span>
                            <i class="mr-3 shrink-0 w-6" :class="navigation.icon"></i>
                        </span>
                        <span>{{navigation.label}}</span>
                    </div>
                    <span v-if="hasChild(navigation)">
                        <i class="mr-3 shrink-0 w-6 fas fa-chevron-right" v-if="navigation.active"></i>
                        <i class="mr-3 shrink-0 w-6 fas fa-chevron-down" v-else></i>
                    </span>
                </div>
            </div>
            <div v-if="hasChild(navigation)">
                <ul>
                    <li class="text-secondary hover:text-darken-secondary hover:bg-darken-primary dark:hover:bg-black cursor-pointer"
                        v-for="child in navigation.children"
                        :key="child.name"
                    >
                        <div class="pl-10 pr-2 py-2 flex items-center">
                            <span>
                                <i class="mr-3 shrink-0 w-4" :class="child.icon"></i>
                            </span>
                            <span>{{child.label}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AppNavigation'
}
</script>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const navigations = [
    {
        icon: 'fas fa-home',
        label: 'Dashboard',
        name: 'Dashboard',
        path: 'Dashboard'
    },
    {
        icon: 'fas fa-table',
        label: 'Table',
        name: 'Table',
        path: 'Table'
    },
    {
        icon: 'fab fa-wpforms',
        label: 'Form',
        name: 'Form',
        path: 'Form'
    },
    {
        icon: 'far fa-square',
        label: 'Card',
        name: 'Card',
        path: 'Card'
    },
    {
        icon: 'fas fa-sign-in-alt',
        label: 'Login',
        name: 'Login',
        path: 'Login'
    },
    {
        icon: 'fas fa-user-plus',
        label: 'Register',
        name: 'Register',
        path: 'Register'
    },
    {
        icon: 'fas fa-key',
        label: 'Forgot Password',
        name: 'Password',
        path: 'Password'
    },
    {
        icon: 'fas fa-times',
        label: 'Error 404',
        name: 'Error404',
        path: 'Error404'
    },
    {
        icon: 'fas fa-boxes',
        label: 'Sub Menu',
        name: 'SubMenu',
        active: false,
        children: [
            {
                icon: 'fas fa-chevron-right',
                label: 'Sub Menu 1',
                name: 'SubMenu1',
            },
            {
                icon: 'fas fa-chevron-right',
                label: 'Sub Menu 2',
                name: 'SubMenu2',
            }
        ]
    }
]

const clickNavigation = (navigation) => {
    if (hasChild(navigation)) {
        navigation.active = true
        return
    }

    if (hasPath(navigation)) {
        router.push({name: navigation.path})
    }

    return;
}

const hasPath = (navigation) => {
    return navigation.hasOwnProperty('path') ? true : false
}

const hasChild = (navigation) => {
    return navigation.hasOwnProperty('children') && navigation.children.length > 0 ? true : false
}

const isActive = (navigation) => {
    if (navigation.hasOwnProperty('active') && navigation.active) {
        return true;
    }

    return false;
}
</script>