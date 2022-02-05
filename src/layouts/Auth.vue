<template>
    <div class="relative h-screen flex overflow-hidden bg-gray-200 dark:bg-dark-body">
        <AppSidebar></AppSidebar>

        <div class="flex-1 flex flex-col w-0 overflow-hidden">
            <AppHeader></AppHeader>

            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                <div class="pt-4 px-4 bg-black">
                    <p class="px-10 py-2 rounded-full bg-info text-info-label">
                        <a href="https://scriptmint.com/vana-admin" target="_blank">
                            Vumin is FREE Admin Template built with Vue.js & Tailwind CSS. Checkout our Advanced Version Vana-Admin built with Laravel, Vue.js & Tailwind CSS at https://scriptmint.com/vana-admin
                        </a>
                    </p>
                </div>
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