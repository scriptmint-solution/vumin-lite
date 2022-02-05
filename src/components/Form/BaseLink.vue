<template>
    <div class="text-sm">
        <span
            @click="router.push({name: to})"
            class="
                cursor-pointer
                font-medium
                text-primary dark:text-gray-400
                hover:text-dark-primary dark:focus:text-gray-300
            "
        >
            <slot></slot>
        </span>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const props = defineProps({
    to: {
        type: String,
        default: ''
    }
})
</script>