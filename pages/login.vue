<template>
    <Title>Login</Title>

    <Form @submit="handleSubmit" :validation-schema="LoginSchema">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-0">
                <TextInput name="email" label="Email" type="email" />
                <!-- <Field name="email" />
                <ErrorMessage name="email" /> -->
                <!-- <Field name="email" v-slot="{ field, errorMessage }">
                    <label for="email" class="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" class="w-full" :value="field" />
                    <pre>{{ JSON.stringify(field) }}</pre>
                    <small v-if="errorMessage" class="text-xs text-red-400">{{errorMessage}}</small>
                </Field> -->
            </div>
    
           <div class="flex flex-col gap-0">
                <label for="password" class="block text-900 font-medium mb-2">Password</label>
                <InputText id="password" type="password" class="w-full" />
           </div>
    
            <Button label="Sign In" class="w-full" @click="handleSubmit" />
        </div>
    </Form>
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

async function handleSubmit() {
    const {success} = safeParse(LoginSchema, { email: username.value, password: password.value });

    if (!success) {
        console.warn("login schema failed");
        return;
    }

    await supabase.auth.signInWithPassword({
        email: username.value,
        password: password.value,
    });
    navigateTo("/project");
}
</script>
