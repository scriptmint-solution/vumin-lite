<template>
    <div class="mt-1 text-sm text-danger" v-if="error">
        {{error}}
    </div>
</template>

<script>
export default {
    name: 'FormError'
}
</script>

<script setup>
const props = defineProps({
    error: {
        type: String,
        default: ''
    }
})
</script>
