<template>
    <div class="min-h-screen flex items-center bg-primary dark:bg-dark-header overflow-hidden">
        <div class="w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
            <div class="bg-secondary dark:bg-dark-body rounded-lg px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div class="max-w-max mx-auto">
                    <main class="sm:flex">
                        <router-view />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>