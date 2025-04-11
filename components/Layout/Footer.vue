<script setup>
    const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="c-footer">
        <NuxtPicture 
            class="c-footer__picture"
            src="https://res.cloudinary.com/dwkcyxb9r/image/upload/v1744058904/medium_tower_scaffolding_home_banner_388334a539.jpg"
            alt="building with scaddolding surrounding the entire building" 
            width="500"
            height="375"
            format="avif,webp,jpg"
        />
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
                    >info@towerscaffold-netting.co.uk test</NuxtLink>
                </div>
                <small> 
                    <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a>
                </small>
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
        position: relative;

        &__picture {
            position: absolute;
            right:0;
            top: 0;
            bottom: 0;
            overflow: hidden;
            width: 50%;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(to right, rgba(#001489, 1), rgba(#001489, 0.6));
            }
        }

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
            position: relative;
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