<template>
    <div class="p-4 space-y-4">
        <PageHeader title="Table" subtitle="Listing all Records">
            <BaseButton>Add New Item</BaseButton>
            <BaseButton>Export</BaseButton>
        </PageHeader>

        <div class="border-b border-gray-200 dark:border-dark-body">
            <table class="rounded-table w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-neutral-700">
                    <tr>
                        <th class="px-6 py-3 text-sm text-gray-500 dark:text-gray-200 text-left" v-for="header in headers">
                            {{header}}
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-dark-header divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-for="item in data" class="">
                        <td class="table-data">
                            {{item.name}}
                        </td>
                        <td class="table-data">
                            {{item.gender}}
                        </td>
                        <td class="table-data">
                            {{item.dob}}
                        </td>
                        <td class="table-data">
                            {{item.contact}}
                        </td>
                        <td class="table-data">
                            {{item.country}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table'
}
</script>

<script setup>
const headers = [
    'Name',
    'Gender',
    'Date of Birth',
    'Contact Number',
    'Country'
]

const data = [
    {
        name: 'John Doe',
        gender: 'Male',
        dob: '22 Jan 1970',
        contact: '+243 2583-3920',
        country: 'Africa'
    },
    {
        name: 'Marry Jane',
        gender: 'Female',
        dob: '28 Feb 1989',
        contact: '+37 2583-3920',
        country: 'Great Britain'
    },
    {
        name: 'Robert William',
        gender: 'Male',
        dob: '1 May 1984',
        contact: '+58 2583-3920',
        country: 'France'
    },
    {
        name: 'John Doe',
        gender: 'Male',
        dob: '22 Jan 1970',
        contact: '+243 2583-3920',
        country: 'Africa'
    },
    {
        name: 'Marry Jane',
        gender: 'Female',
        dob: '28 Feb 1989',
        contact: '+37 2583-3920',
        country: 'Great Britain'
    },
    {
        name: 'Robert William',
        gender: 'Male',
        dob: '1 May 1984',
        contact: '+58 2583-3920',
        country: 'France'
    },
    {
        name: 'John Doe',
        gender: 'Male',
        dob: '22 Jan 1970',
        contact: '+243 2583-3920',
        country: 'Africa'
    },
    {
        name: 'Marry Jane',
        gender: 'Female',
        dob: '28 Feb 1989',
        contact: '+37 2583-3920',
        country: 'Great Britain'
    },
    {
        name: 'Robert William',
        gender: 'Male',
        dob: '1 May 1984',
        contact: '+58 2583-3920',
        country: 'France'
    },
    {
        name: 'John Doe',
        gender: 'Male',
        dob: '22 Jan 1970',
        contact: '+243 2583-3920',
        country: 'Africa'
    },
    {
        name: 'Marry Jane',
        gender: 'Female',
        dob: '28 Feb 1989',
        contact: '+37 2583-3920',
        country: 'Great Britain'
    },
    {
        name: 'Robert William',
        gender: 'Male',
        dob: '1 May 1984',
        contact: '+58 2583-3920',
        country: 'France'
    }
]
</script>