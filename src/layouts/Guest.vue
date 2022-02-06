<template>
    <div class="flex min-h-screen bg-gray-50 dark:bg-dark-body">
        <div class="relative flex-1 hidden md:block blur-xs">
            <img class="absolute h-full w-full inset-0 object-cover" src="assets/images/guest-background.jpeg" alt="">
        </div>
        <div class="flex-1 p-4 sm:p-16 lg:p-32 lg:flex-none">

            <div class="flex h-full flex-col justify-center">
                <div class="flex justify-center">
                    <a href="/" class="mb-6">
                        <img
                            class="h-16 w-auto"
                            src="assets/images/icon.png"
                            alt=""
                        />
                    </a>
                </div>

                <div class="sm:w-96 w-full shadow-md rounded-xl bg-white dark:bg-dark-header py-10 px-8 mx-auto">
                    <router-view />
                </div>

                <FooterCredit />
            </div>
        </div>
    </div>
</template>

<script setup>
import FooterCredit from '@layouts/Partials/FooterCredit.vue'
</script>