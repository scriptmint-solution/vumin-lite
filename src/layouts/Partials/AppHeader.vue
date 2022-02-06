<template>
    <div class="relative shrink-0 flex justify-between h-16 bg-black dark:bg-dark-header dark:border-b dark:border-gray-700" >
        <div class="flex items-center space-x-4">
            <div class="flex items-center">
                <img src="/images/icon.png" class="sm:hidden h-10 ml-4 mr-2" />
                <img src="/images/logo.png" class="hidden sm:block h-10 ml-4 mr-2" />
            </div>
            <i class="fas fa-bars lg:hidden text-gray-500 dark:text-gray-300" @click="setSidebar('mobile')"></i>
        </div>
        <div class="flex justify-between items-center space-x-4 px-4">
            <i class="fas fa-sun text-white cursor-pointer" v-if="display == 'dark'" @click="setDisplay('light')"></i>
            <i class="fas fa-moon text-white cursor-pointer" v-if="display == 'light'" @click="setDisplay('dark')"></i>
            <div class="flex items-center">
                <ProfileDropdown />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

const display = computed(() => store.getters.getDisplay)

const setDisplay = (display) => {
    store.dispatch('setDisplay', display)
}

const setSidebar = (sidebar) => {
    store.dispatch('setSidebar', sidebar)
}
</script>