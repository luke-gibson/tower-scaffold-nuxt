<template>
    <LayoutHeader />
    <main>
        <slot />
    </main>
    <LayoutFooter />
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

body.is-locked {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    width: 100%;
}

:root {
    --primary: #001489;
    --secondary: #1D2E82;
    --white: #ffffff;
    --black: #000000;
    --gray: #808080;
    --gray-light: #d3d3d3;
    --gray-dark: #696969;

    --font-size--large: 1.8rem;
    --font-size--small: 1.5rem;
}
</style>