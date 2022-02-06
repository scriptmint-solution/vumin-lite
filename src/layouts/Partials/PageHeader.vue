<template>
    <div class="px-4 sm:px-6 lg:px-0">
        <nav class="flex">
            <ol class="flex items-center space-x-2">
                <li>
                    <div class="flex">
                        <router-link :to="{name: 'Dashboard'}" class="text-sm font-medium text-gray-400 hover:text-gray-600">
                            <i class="fas fa-home mr-2"></i> Dashboard
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <span class="mr-2 text-gray-500">/</span>
                        <span class="text-sm font-medium text-gray-400">{{title}}</span>
                    </div>
                </li>
            </ol>
        </nav>
        <div class="mt-2 sm:flex sm:items-center sm:justify-between">
            <div class="flex-1 min-w-0 dark:text-gray-400">
                <h2 class="text-xl font-bold leading-7 sm:text-2xl sm:truncate">
                    {{title}}
                </h2>
                <h6 v-if="subtitle">{{subtitle}}</h6>
            </div>
            <div class="mt-4 shrink-0 flex sm:mt-0 sm:ml-4 space-x-4">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader'
}
</script>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    }
})
</script>