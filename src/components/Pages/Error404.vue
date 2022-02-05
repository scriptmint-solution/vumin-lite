<template>
    <p class="text-4xl font-extrabold text-primary dark:text-gray-200 sm:text-5xl">404</p>
    <div class="sm:ml-6">
        <div class="sm:border-l sm:border-gray-200 sm:pl-6">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-gray-400 tracking-tight sm:text-5xl">404 Error</h1>
        <p class="mt-1 text-base text-gray-500 dark:text-gray-300">Seems, you have lost!</p>
        </div>
        <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <BaseButton type="button" @click="router.push({name: 'Dashboard'})">Go to Dashboard</BaseButton>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
</script>