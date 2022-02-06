<template>
    <div class="space-y-6 lg:px-0 lg:col-span-9">
        <div class="relative">
            <div v-if="$slots.title || $slots.action" class="flex justify-between px-4 py-3 bg-white dark:bg-dark-header border-b border-gray-200 dark:border-gray-700 sm:rounded-tl-lg sm:rounded-tr-lg">
                <div v-if="$slots.title" class="text-lg text-gray-800 dark:text-gray-400 leading-7 sm:text-xl sm:truncate">
                    <slot name="title"></slot>
                </div>
                <div v-if="$slots.action" class="text-right">
                    <slot name="action"></slot>
                </div>
            </div>
            <div class="bg-white dark:bg-dark-header"
                :class="{
                    'sm:rounded-tl-lg sm:rounded-tr-lg': ! $slots.title && ! $slots.action,
                    'sm:rounded-bl-lg sm:rounded-br-lg': ! $slots.footer,
                }"
            >
                <slot></slot>
            </div>
            <div v-if="$slots.footer" class="px-4 py-3 bg-white dark:bg-dark-header text-right sm:px-6 sm:rounded-bl-lg sm:rounded-br-lg">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseCard'
}
</script>

<script setup>
import { useSlots } from "vue"

const slots = useSlots()
</script>
