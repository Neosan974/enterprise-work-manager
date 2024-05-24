<template>
    <main>
        <div class="main-container">
            <VTitle :level="1" style="margin-top: 0">You are not authenticated</VTitle>
            <slot />
        </div>
    </main>
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    height: 100vh;
}

#__nuxt {
    height: 100%;
}
</style>

<style scoped lang="scss">
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url("https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8");
    background-repeat: no-repeat;
    background-size: cover;
}

.main-container {
    background-color: rgba(255, 255, 255, 0.5);
    border: 5px solid black;
    backdrop-filter: blur(8px);
    border-radius: 1em;
    padding: 5em;
}
</style>
