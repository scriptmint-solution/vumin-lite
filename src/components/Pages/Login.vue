<template>
    <GuestHeader label="Sign In"></GuestHeader>

    <ParentTransition appear :visibility="true">
        <div class="space-y-6">
            <BaseInput type="text" name="email" label="Email or Username" autofocus />

            <BaseInput type="password" name="password" label="Password" />

            <div class="flex items-center justify-between">
                <BaseCheckbox name="rememberMe" id="rememberMe" label="Remember Me"></BaseCheckbox>

                <BaseLink to="Password">Forgot Password?</BaseLink>
            </div>

            <BaseButton @click="router.push({name: 'Dashboard'})" block>Login</BaseButton>

            <div class="flex justify-center space-x-2">
                <BaseButton design="danger"><i class="fab fa-google"></i></BaseButton>

                <BaseButton design="facebook"><i class="fab fa-facebook"></i></BaseButton>

                <BaseButton design="info"><i class="fab fa-twitter"></i></BaseButton>

                <BaseButton><i class="fab fa-github"></i></BaseButton>
            </div>

            <div class="flex items-center justify-center">
                <BaseLink to="Register">Don't have any account? Register Here</BaseLink>
            </div>
        </div>
    </ParentTransition>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
</script>