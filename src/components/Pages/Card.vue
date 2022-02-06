<template>
    <div class="p-4 space-y-4">

        <PageHeader title="Form" subtitle="Sample Form">
            <BaseButton>List all Items</BaseButton>
        </PageHeader>

        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-3 sm:col-span-1">
                <BaseCard>
                    <div class="p-4 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus, incidunt et vero libero distinctio mollitia eum, quo quis quod accusantium, laborum illum dignissimos similique. Aliquid, unde. Quas, voluptates provident.
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-3 sm:col-span-1">
                <BaseCard>
                    <template #title>Card with Heading</template>
                    <div class="p-4 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus, incidunt et vero libero distinctio mollitia eum, quo quis quod accusantium, laborum illum dignissimos similique. Aliquid, unde. Quas, voluptates provident.
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-3 sm:col-span-1">
                <BaseCard>
                    <div class="p-4 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus, incidunt et vero libero distinctio mollitia eum, quo quis quod accusantium, laborum illum dignissimos similique. Aliquid, unde. Quas, voluptates provident.
                    </div>

                    <template #footer>
                        <BaseButton design="danger">Action</BaseButton>
                    </template>
                </BaseCard>
            </div>
            <div class="col-span-3 sm:col-span-1">
                <BaseCard>
                    <template #title>Card with Heading & Footer</template>

                    <div class="p-4 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus, incidunt et vero libero distinctio mollitia eum, quo quis quod accusantium, laborum illum dignissimos similique. Aliquid, unde. Quas, voluptates provident.
                    </div>

                    <template #footer>
                        <BaseButton design="success">Action</BaseButton>
                    </template>
                </BaseCard>
            </div>
            <div class="col-span-3 sm:col-span-1">
                <BaseCard>
                    <template #title>Card with Heading, Action & Footer</template>
                    <template #action>
                        <BaseButton size="sm" design="primary">Action</BaseButton>
                    </template>

                    <div class="p-4 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus, incidunt et vero libero distinctio mollitia eum, quo quis quod accusantium, laborum illum dignissimos similique. Aliquid, unde. Quas, voluptates provident.
                    </div>

                    <template #footer>
                        <BaseButton design="info">Action</BaseButton>
                    </template>
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<script setup>

</script>