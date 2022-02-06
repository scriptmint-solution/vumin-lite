<template>
  <Menu>
    <MenuButton class="inline-flex items-center justify-center">
        <img
            class="h-8 w-8 rounded-full"
            src="assets/images/male.png"
            alt=""
        />
    </MenuButton>
    <MenuItems class="overflow-hidden top-12 right-0 mx-2 absolute w-48 mt-1 rounded-md z-20 bg-white dark:bg-dark-header dark:border dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-600
        ">
        <MenuItem v-slot="{ active }">
            <div class="px-4 py-2 text-sm cursor-pointer" :class='{
                    "bg-gray-100 text-gray-900 dark:bg-dark-body dark:text-gray-400": active,
                    "text-gray-700 dark:text-gray-300": ! active
                }'>
                User Profile
            </div>
        </MenuItem>
        <MenuItem v-slot="{ active }">
            <div class="px-4 py-2 text-sm cursor-pointer" :class='{
                    "bg-gray-100 text-gray-900 dark:bg-dark-body dark:text-gray-400": active,
                    "text-gray-700 dark:text-gray-300": ! active
                }'>
                Change Password
            </div>
        </MenuItem>
        <MenuItem v-slot="{ active }">
            <div @click="router.push({name: 'Login'})" class="px-4 py-2 text-sm cursor-pointer" :class='{
                    "bg-gray-100 text-gray-900 dark:bg-dark-body dark:text-gray-400": active,
                    "text-gray-700 dark:text-gray-300": ! active
                }'>
                Logout
            </div>
        </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script>
export default {
    name: 'ProfileDropdown'
}
</script>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useRouter } from "vue-router"

const router = useRouter()
</script>