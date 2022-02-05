<template>
    <label :for="for" class="block text-sm dark:text-gray-400 font-medium text-label truncate">
        <div class="flex justify-between">
            <slot></slot>
        </div>
    </label>
</template>

<script>
export default {
    name: 'BaseLabel'
}
</script>

<script setup>
const props = defineProps({
    for: {
        type: String,
        default: ''
    }
})
</script>