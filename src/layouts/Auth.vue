<template>
    <div class="relative mt-16 h-screen flex overflow-hidden bg-gray-200 dark:bg-dark-body">
        <AppSidebar></AppSidebar>

        <div class="flex-1 flex flex-col w-0 overflow-hidden">
            <AppHeader></AppHeader>

            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                <div class="space-y-4">
                    <router-view />
                </div>

                <FooterCredit />
            </main>
        </div>
    </div>
</template>

<script setup>
import FooterCredit from '@layouts/Partials/FooterCredit.vue'
</script>