<template>
    <GuestHeader label="Create an Accou t"></GuestHeader>

    <ParentTransition appear :visibility="true">
        <div class="space-y-6">
            <BaseInput type="text" name="name" label="Name" autofocus />

            <BaseInput type="text" name="email" label="Email" />

            <BaseInput type="text" name="username" label="Username" />

            <BaseInput type="password" name="password" label="Password" />

            <BaseInput type="password" name="passwordConfirmation" label="Confirm Password" />

            <BaseButton type="submit" @click="router.push({name: 'Dashboard'})" block>Register</BaseButton>

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