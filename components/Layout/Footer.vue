<script setup>
</script>

<template>
    <footer class="c-footer">
        <LayoutContainer class="c-footer__wrap">
            <div class="c-footer__contact">
                <h2>Get in touch</h2>
                <div>Mobile: 
                <NuxtLink
                    to="tel:123456789"
                    class="c-footer__link"
                    >7777 777 777</NuxtLink>
                </div>
                <div>Portsmouth: 
                <NuxtLink
                    to="tel:123456789"
                    class="c-footer__link"
                    >02392 123 456</NuxtLink>
                </div>
                <div>Southampton: 
                <NuxtLink
                    to="tel:123456789"
                    class="c-footer__link"
                    >02380 123 456</NuxtLink>
                </div>
                <div>Email: 
                <NuxtLink
                    to="mailto:info@towerscaffold-netting.co.uk"
                    class="c-footer__link"
                    >info@towerscaffold-netting.co.uk</NuxtLink>
                </div>
            </div>
            <div>
                <NuxtLink to="/" class="c-footer__social" aria-label="Link to Facebook">
                    <IconsFacebook />
                </NuxtLink>
                <NuxtLink to="/" class="c-footer__social" aria-label="Link to Instagram">
                    <IconsInstagram />
                </NuxtLink>
                <NuxtLink to="/" class="c-footer__social" aria-label="Link to Open WhatsApp">
                    <IconsWhatsApp />
                </NuxtLink>
            </div>
        </LayoutContainer>
    </footer>
</template>

<style scoped lang="scss">
    .c-footer {
        background-color: var(--primary);
        padding-top: var(--component-spacing);
        padding-bottom: var(--component-spacing);
        color: var(--white);

        a {
            color: var(--white);
            text-decoration: none;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }

        &__wrap {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
        }

        &__social {
            display: inline-block;
            margin-right: 1.5rem;
            margin-top: 1.5rem;

            &:last-of-type {
                margin-right: 0;
            }

            svg {
                width: 2.2rem;
            }
        }
    }
</style>