<template>
    <Title>Login</Title>
    <VConfigProvider>
        <VForm ref="form" :rules="rules" :model="formModel" hide-label>
            <VFormItem prop="email">
                <VInput placeholder="Email"></VInput>
            </VFormItem>
            <VFormItem prop="password">
                <VInput type="password" plain-password placeholder="Password"></VInput>
            </VFormItem>
            <VFormItem action>
                <VFormSubmit @submit="handleSubmit">
                    Login
                </VFormSubmit>
            </VFormItem>
        </VForm>
    </VConfigProvider>
</template>

<script setup lang="ts">
import type { VForm } from '#build/components';
import { object, string, pipe, minLength, email, safeParse, flatten } from "@valibot/valibot";

const supabase = useSupabaseClient()

const LoginSchema = object({
  email: pipe(string(), minLength(1), email()),
  password: pipe(string(), minLength(5)),
});

definePageMeta({
    layout: 'auth',
});

const form = ref<InstanceType<typeof VForm>>();

const formModel = {
    email: "",
    password: "",
};

const rules = {
    email: {
        validator() {
            const result = safeParse(LoginSchema, formModel);
            if (!result.success) {
                const { email } = flatten<typeof LoginSchema>(result.issues).nested!;
                return [...(email ?? [])][0];
            }
            return true;
        },
    },
    password: {
        validator() {
            const result = safeParse(LoginSchema, formModel);
            if (!result.success) {
                const { password } = flatten<typeof LoginSchema>(result.issues).nested!;
                return [...(password ?? [])][0];
            }
            return true;
        },
    },
};

async function handleSubmit() {
    await supabase.auth.signInWithPassword({
        ...formModel,
    });
    navigateTo("/project");
}
</script>
