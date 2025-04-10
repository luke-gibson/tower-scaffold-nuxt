<script setup>
    const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="c-footer">
        <LayoutContainer class="c-footer__wrap">
            <div class="c-footer__contact">
                <h2>Get in touch</h2>
                <div>Mobile: 
                <NuxtLink
                    to="tel:07496741580"
                    class="c-footer__link"
                    >07496 741 580</NuxtLink>
                </div>
                <div>Southampton: 
                <NuxtLink
                    to="tel:02380308887 "
                    class="c-footer__link"
                    >02380 308 887 </NuxtLink>
                </div>
                <div>Email: 
                <NuxtLink
                    to="mailto:info@towerscaffold-netting.co.uk"
                    class="c-footer__link"
                    >info@towerscaffold-netting.co.uk</NuxtLink>
                </div>
            </div>
            <div class="c-footer__social">
                <small> &copy; Tower Scaffold + Netting | All rights reserved {{ currentYear }} </small>
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