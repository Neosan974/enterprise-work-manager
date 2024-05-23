<template>
    <Title>Login</Title>
    <VConfigProvider>
        <VForm ref="form" :model="formModel" :rules="rules" hide-label>
            <VFormItem prop="email">
                <VInput placeholder="Email"></VInput>
            </VFormItem>
            <VFormItem>
                <VInput type="password" plain-password placeholder="Password"></VInput>
            </VFormItem>
            <VFormItem action>
                <VFormSubmit @submit="handleSubmit" @errors="handleErrors">
                    Login
                </VFormSubmit>
            </VFormItem>
        </VForm>
    </VConfigProvider>
</template>

<script setup lang="ts">
import type { VForm } from '#build/components';

definePageMeta({
    layout: 'auth',
});

const form = ref<InstanceType<typeof VForm>>();

const formModel = {};

const rules = {
    email: {
        required: true,
        // validator: (value: string) => true,
        // message: "no email",
    },
    password: {
        required: true,
        // validator: (value: string) => true,
        // message: "too weak",
    },
}

function handleSubmit() {
    console.log("login");
}

function handleErrors(errors: string[]) {
    console.error(errors);
}
</script>
