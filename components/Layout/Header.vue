<script setup>
</script>

<template>
    <header class="c-header">
        <div class="c-header__wrap">
            <NuxtImg
                class="c-header__logo"
                src="/images/logo.png"
                alt="Logo"
                width="200"
                height="50"
            />
            <nav class="c-header__nav">                
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/services">Services</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    .c-header {
        background-color: red;
    }
</style>