<template>
    <TransitionChild
        as="div"
        :appear="appear"
        :show="visibility"
        enter="transition transform duration-500 ease-out"
        enter-from="translate-x-10 opacity-0"
        enter-to="translate-x-0 opacity-100"
        leave="transition transform duration-500 ease-in"
        leave-from="translate-x-0 opacity-100"
        leave-to="translate-x-10 opacity-0"
    >
        <slot></slot>
    </TransitionChild>
</template>

<script>
export default {
    name: 'ChildTransition'
}
</script>

<script setup>
import { TransitionChild } from '@headlessui/vue'

const props = defineProps({
    visibility: {
        type: Boolean,
        default: false
    },
    appear: {
        type: Boolean,
        default: false
    }
})
</script>
