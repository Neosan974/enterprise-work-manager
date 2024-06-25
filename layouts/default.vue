<template>
    <!-- <VLayout
        logo="https://www.vexipui.com/vexip-ui.svg"
        sign-name="Vexip UI"
        :user="layoutUser"
        :menu-props="{ router }"
        :no-aside="true"
    >
        <template #header-user>
            <VDropdown>
                <VAvatar circle>{{ user?.email }}</VAvatar>
                <template #drop>
                    <VDropdownList>
                        <VDropdownItem @click="logout">Logout</VDropdownItem>
                    </VDropdownList>
                </template>
            </VDropdown>
        </template>
        <template #main>
            <div style="width: 100%; padding: 0 20px">
                <slot />
            </div>
        </template>
    </VLayout> -->
    test
    <slot />
</template>

<script setup lang="ts">
import { createMemoryHistory, createRouter } from "vue-router";

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
});

async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.warn(error);
        return;
    }
    await router.push("/login");
}
</script>
