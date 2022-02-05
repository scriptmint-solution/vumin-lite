<template>
    <ParentTransition appear :visibility="true">
        <div class="mb-10 text-center">
            <h2 v-if="label" class="text-3xl font-extrabold text-gray-900 dark:text-gray-400">
                {{label}}
            </h2>
            <slot></slot>
        </div>
    </ParentTransition>
</template>

<script>
export default {
    name: 'GuestHeader'
}
</script>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    }
})
</script>