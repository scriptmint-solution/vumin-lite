<template>
    <MobileSidebar></MobileSidebar>

    <div class="hidden lg:flex lg:shrink-0">
        <div
            class="
                flex flex-col transition-all duration-200 ease-out
                border-r border-primary dark:border-gray-700
                pt-5
                pb-4
                bg-primary dark:bg-dark-header
                w-64
            "
        >
            <div class="h-0 flex-1 flex flex-col scroller-x">

                <nav class="px-0 mt-6">
                    <AppNavigation />
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSidebar'
}
</script>

<script setup>

</script>