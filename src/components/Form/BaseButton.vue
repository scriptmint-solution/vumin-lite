<template>
    <button
        type="button"
        class="
            relative
            inline-flex
            items-center justify-start overflow-hidden
            font-medium
            rounded-full
        "
        :class="
            {
                'w-full flex justify-center': block === true,
                'inline-flex items-center': block === false,
                'px-2.5 py-1.5 text-xs': size === 'xs',
                'px-3 py-2 text-sm leading-4': size === 'sm',
                'px-4 py-2 text-sm': size === 'md',
                'px-4 py-2 text-base': size === 'lg',
                'px-6 py-3 text-base': size === 'xl',
                'bg-white hover:bg-gray-200 dark:bg-dark-header dark:hover:bg-neutral-700 text-gray-600 dark:text-gray-400 focus:ring-white' : design === 'white',
                'bg-primary hover:bg-dark-primary dark:bg-gray-700 dark:hover:bg-gray-500 text-secondary dark:text-gray-200 focus:ring-primary dark:focus:ring-dark-header' : design === 'primary',
                'bg-secondary hover:bg-dark-secondary dark:bg-dark-body dark:hover:bg-neutral-700 text-primary dark:text-gray-400 focus:ring-secondary dark:focus:ring-dark-body' : design === 'secondary',
                'bg-success hover:bg-dark-success text-secondary focus:ring-success' : design === 'success',
                'bg-[#3b5998] hover:bg-[#1f4494] text-white focus:ring-[#3b5998]' : design === 'facebook',
                'bg-info hover:bg-dark-info text-secondary focus:ring-info' : design === 'info',
                'bg-warning hover:bg-dark-warning text-secondary focus:ring-warning' : design === 'warning',
                'bg-danger hover:bg-dark-danger text-secondary focus:ring-danger' : (design === 'danger' || design === 'error'),
            }
        "
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton'
}
</script>

<script setup>
const props = defineProps({
    size: {
        type: String,
        default: 'md'
    },
    block: Boolean,
    design: {
        type: String,
        default: 'primary'
    }
})
</script>
