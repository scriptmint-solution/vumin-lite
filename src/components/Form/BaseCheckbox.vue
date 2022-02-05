<template>
    <div class="flex items-center">
        <input
            v-bind="$attrs"
            type="checkbox"
            class="
                h-4
                w-4
                text-primary dark:text-dark-body
                focus:ring-0
                border-primary dark:border-gray-700
                cursor-pointer
                rounded
            "
        />
        <label :for="$attrs.id" class="ml-2 block text-sm text-gray-900 dark:text-gray-400">
            <div class="flex justify-between">
                {{label}}
            </div>
        </label>
    </div>
    <FormError :error="error" />
</template>

<script>
export default {
    name: 'BaseCheckbox',
    inheritAttrs: false
}
</script>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    }
})
</script>
