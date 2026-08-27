<script setup lang="ts">
import type { RichTextBlocks } from '~/types/strapiRichText';

defineProps<{
  content?: string | RichTextBlocks[];
  highlight?: boolean;
  spacingTop?: boolean;
  spacingBottom?: boolean;
}>();
</script>

<template>
  <section :class="['c-text', { 'c-text--highlight': highlight }, { 'o-section--top': spacingTop }, { 'o-section--bottom': spacingBottom }]">
    <LayoutContainer>
      <div class="c-text__content">
        <RichTextBlocks v-if="Array.isArray(content)" :data="content" />
      </div>
    </LayoutContainer>
  </section>
</template>

<style lang="scss">
.c-text {
  padding-top: var(--component-spacing);
  padding-bottom: var(--component-spacing);

  &__content {
    max-width: 75rem;

    h1, h2, h3, h4, h5, h6 {
      color: var(--primary);
      text-transform: uppercase;
      margin-bottom: 1.6rem;
      margin-top: 0;
    }

    p {
      line-height: 1.8;
      color: #444;
    }

    ul, ol {
      padding-left: 0;
      margin: 0 0 2rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    ul li {
      display: flex;
      align-items: flex-start;
      gap: 1.2rem;
      line-height: 1.5;
      color: #444;

      &::before {
        content: "";
        flex-shrink: 0;
        width: 1.6rem;
        height: 1.6rem;
        margin-top: 0.3rem;
        background-color: var(--primary);
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }
    }

    ol { counter-reset: item; }

    ol li {
      display: flex;
      align-items: flex-start;
      gap: 1.2rem;
      line-height: 1.5;
      color: #444;
      counter-increment: item;

      &::before {
        content: counter(item);
        flex-shrink: 0;
        width: 2.4rem;
        height: 2.4rem;
        background-color: var(--primary);
        color: var(--white);
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.1rem;
      }
    }

    a {
      color: var(--primary);
      text-underline-offset: 0.2em;
      transition: opacity 0.2s ease;

      &:hover, &:focus { opacity: 0.7; }
    }
  }

  &--highlight {
    background-color: var(--primary);

    .c-text__content {
      h1, h2, h3, h4, h5, h6 { color: var(--white); }
      p { color: rgba(255,255,255,0.82); }
      ul li, ol li { color: rgba(255,255,255,0.82); }
      ul li::before { background-color: var(--white); }
      ol li::before { background-color: rgba(255,255,255,0.2); color: var(--white); }
      a { color: rgba(255,255,255,0.85); }
    }
  }
}
</style>
