<template>
    <div class="p-4 space-y-4">

        <PageHeader title="Form" subtitle="Sample Form">
            <BaseButton>List all Items</BaseButton>
        </PageHeader>

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