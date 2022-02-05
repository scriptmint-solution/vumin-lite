<template>
    <div class="p-4 space-y-4">

        <div class="px-4 sm:px-6 lg:px-0">
            <nav class="flex">
                <ol class="flex items-center space-x-2">
                    <li>
                        <div class="flex">
                            <router-link :to="{name: 'Dashboard'}" class="text-sm font-medium text-gray-400 hover:text-gray-600">
                                <i class="fas fa-home mr-2"></i> Dashboard
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="mr-2 text-gray-500">/</span>
                            <span class="text-sm font-medium text-gray-400">Form</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div class="mt-2 sm:flex sm:items-center sm:justify-between">
                <div class="flex-1 min-w-0 dark:text-gray-400">
                    <h2 class="text-xl font-bold leading-7 sm:text-2xl sm:truncate">
                        Form
                    </h2>
                    <h6>Listing a Sample Form</h6>
                </div>
                <div class="mt-4 shrink-0 flex sm:mt-0 sm:ml-4 space-x-4">
                    <BaseButton>List all Items</BaseButton>
                </div>
            </div>
        </div>

        <BaseCard>
            <div class="p-4">
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-1">
                        <BaseInput type="text" name="name" label="Name" autofocus />
                    </div>
                    <div class="col-span-3 sm:col-span-1">
                        <BaseInput type="text" name="gender" label="Gender" />
                    </div>
                    <div class="col-span-3 sm:col-span-1">
                        <BaseInput type="text" name="dob" label="Date of Birth" />
                    </div>
                    <div class="col-span-3 sm:col-span-1">
                        <BaseInput type="text" name="contact" label="Contact Number" />
                    </div>
                    <div class="col-span-3 sm:col-span-1">
                        <BaseInput type="text" name="country" label="Country" />
                    </div>
                </div>

                <div class="mt-4 flex justify-between">
                    <div class="flex space-x-4">
                        <BaseButton class="hidden sm:block" design="secondary">Reset</BaseButton>
                    </div>
                    <div class="space-x-4">
                        <BaseButton design="error">Cancel</BaseButton>
                        <BaseButton design="primary">Submit</BaseButton>
                    </div>
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script>
export default {
    name: 'Form'
}
</script>

<script setup>
</script>