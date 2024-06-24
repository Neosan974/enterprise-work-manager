<template>
    <Title>Login</Title>

    <form @submit.prevent="handleSubmit">
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="text" class="w-full mb-3" />

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" type="password" class="w-full mb-3" />

        <Button label="Sign In" class="w-full" @click="console.log" />
    </form>
</template>

<script setup lang="ts">
import { object, string, pipe, minLength, email, safeParse } from "@valibot/valibot";

const supabase = useSupabaseClient()

const LoginSchema = object({
  email: pipe(string(), minLength(1), email()),
  password: pipe(string(), minLength(5)),
});

definePageMeta({
    layout: 'auth',
});

const username = ref<string>("");
const password = ref<string>("");

async function handleSubmit(event: Event) {
    console.log("klik");
    const {success} = safeParse(LoginSchema, { email: username.value, password: password.value });

    if (!success) {
        console.error("login schema failed");
        return;
    }

    await supabase.auth.signInWithPassword({
        email: username.value,
        password: password.value,
    });
    navigateTo("/project");
}
</script>
