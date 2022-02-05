<template>
    <div>
        <div class="px-4 pt-6 pb-16 bg-black">
            <div
                class="mt-4 w-full grid grid-cols-1 md:grid-cols-3 gap-4 relative"
                ref="loadingContainer"
            >
                <template v-for="stat in stats">
                    <div
                        class="bg-white dark:bg-dark-header shadow rounded-lg p-4 sm:p-6 xl:p-8"
                    >
                        <div class="flex items-center">
                            <div class="shrink-0">
                                <span
                                    class="text-2xl sm:text-3xl leading-none font-semibold text-gray-900 dark:text-gray-400"
                                    >{{ stat.count }}</span
                                >
                                <h3
                                    class="mt-2 text-base font-normal text-gray-500 uppercase"
                                >
                                    {{ stat.title }}
                                </h3>
                            </div>
                            <div
                                class="ml-5 w-0 flex items-center justify-end flex-1 font-bold"
                            >
                                <div class="rounded-full" :class="[stat.color]">
                                    <i
                                        :class="stat.icon"
                                        class="text-white h-12 w-12 flex items-center justify-center"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="-mt-10 px-4 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="col-span-1">
                <div class="relative" ref="loadingContainer">
                    <BaseCard no-padding>
                        <template #title>
                            Hello, John Doe
                            <h3 class="text-2xl font-semibold">
                                {{ moment().format('dddd Do, MMMM YYYY') }}
                            </h3>
                        </template>
                        <template v-for="agenda in agendas">
                            <div
                                class="p-4 border-b border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-neutral-700"
                            >
                                <div class="flex items-center">
                                    <div class="shrink-0">
                                        <div
                                            class="rounded-full p-2"
                                            :class="[agenda.color]"
                                        >
                                            <i
                                                :class="agenda.icon"
                                                class="text-white h-6 w-6 flex items-center justify-center"
                                            ></i>
                                        </div>
                                    </div>
                                    <div
                                        class="ml-5 w-0 flex items-center flex-1"
                                    >
                                        <div>
                                            <p class="dark:text-gray-400">
                                                {{ agenda.title }}
                                            </p>
                                            <p
                                                class="text-sm dark:text-gray-500"
                                            >
                                                {{ agenda.date }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </BaseCard>
                </div>
            </div>

            <div class="col-span-1 sm:col-span-2">
                <BaseCard>
                    <template #title>User Stats</template>
                    <BarChart :chartData="data" v-if="data.labels" />
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment'
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const stats = [
    {
        title: 'New Users',
        count: 1940,
        icon: 'fas fa-user-plus',
        color: 'bg-success',
    },
    {
        title: 'Active Users',
        count: 5123,
        icon: 'fas fa-user-tie',
        color: 'bg-primary dark:bg-gray-700',
    },
    {
        title: 'Total Users',
        count: 9850,
        icon: 'fas fa-users',
        color: 'bg-info',
    },
]

const agendas = [
    {
        title: 'Lorem Ipsum',
        date: '05 Feb 2022 16:26 pm',
        icon: 'fas fa-handshake',
        color: 'bg-danger',
    },
    {
        title: 'Lorem Ipsum',
        date: '06 Feb 2022',
        icon: 'fas fa-video',
        color: 'bg-success',
    },
    {
        title: 'Lorem Ipsum',
        date: '08 Feb 2022',
        icon: 'fas fa-calendar',
        color: 'bg-info',
    },
    {
        title: 'Lorem Ipsum',
        date: '10 Feb 2022 15:26 pm',
        icon: 'fas fa-video',
        color: 'bg-success',
    },
]

const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    datasets: [
        {
            label: '# of User Registration',
            data: [30, 40, 50, 25, 5],
            backgroundColor: [
                '#77CEFF',
                '#0079AF',
                '#123E6B',
                '#97B0C4',
                '#A5C8ED',
            ],
        },
        {
            label: '# of Active Registration',
            data: [63, 105, 75, 25, 35],
            backgroundColor: [
                '#77CEFF',
                '#0079AF',
                '#123E6B',
                '#97B0C4',
                '#A5C8ED',
            ],
        },
    ],
}
</script>
