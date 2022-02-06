<template>
    <div v-if="sidebar == 'mobile'" class="fixed inset-0 flex z-40 lg:hidden">
        <div class="relative w-72 py-3 bg-white dark:bg-dark-header dark:text-gray-400 border-r border-primary dark:border-gray-700">
            <i class="absolute top-6 right-6 fas fa-times" @click="setSidebar('full')"></i>
            <img
                class="px-4 h-10 w-auto"
                src="/images/logo.png"
                alt="logo"
            />
            <div class="mt-5 flex-1 h-0">
                <nav>
                    <div class="space-y-1">
                        <AppNavigation></AppNavigation>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MobileSidebar'
}
</script>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

const sidebar = computed(() => store.getters.getSidebar)

const setSidebar = (sidebar) => {
    store.dispatch('setSidebar', sidebar)
}
</script>