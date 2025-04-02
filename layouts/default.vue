<template>  
    <LayoutHeader/>
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
</style>