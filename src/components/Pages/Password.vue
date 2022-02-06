<template>
    <GuestHeader label="Reset Password"></GuestHeader>

    <ParentTransition appear :visibility="true">
        <div class="space-y-6">
            <BaseInput type="text" name="email" label="Email" autofocus />

            <BaseButton type="submit" @click="router.push({name: 'Dashboard'})" block>Request Password</BaseButton>

            <div class="flex items-center justify-center">
                <BaseLink to="Login">Back to Login</BaseLink>
            </div>
        </div>
    </ParentTransition>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
</script>