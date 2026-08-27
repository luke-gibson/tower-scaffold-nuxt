<script setup lang="ts">
withDefaults(defineProps<{ dark?: boolean }>(), { dark: true });
const FORMSPREE_URL = 'https://formspree.io/f/mnpqalwv';

const form = reactive({ name: '', email: '', phone: '', message: '' });
const errors = reactive({ name: '', email: '', message: '' });
const formState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle');

function validateForm() {
  errors.name = form.name.trim() ? '' : 'Please enter your name.';
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ? ''
    : 'Please enter a valid email address.';
  errors.message = form.message.trim() ? '' : 'Please enter a message.';
  return !errors.name && !errors.email && !errors.message;
}

async function submitForm() {
  if (!validateForm()) return;
  formState.value = 'submitting';
  try {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    });
    formState.value = res.ok ? 'success' : 'error';
  } catch {
    formState.value = 'error';
  }
}
</script>

<template>
  <form v-if="formState !== 'success'" class="c-form" :class="{ 'c-form--light': !dark }" novalidate @submit.prevent="submitForm">
    <div class="c-form__row">
      <div class="c-form__field" :class="{ 'c-form__field--error': errors.name }">
        <label class="c-form__label" for="cf-name">Full Name <span aria-hidden="true">*</span></label>
        <input id="cf-name" class="c-form__input" type="text" v-model="form.name" autocomplete="name" />
        <span v-if="errors.name" class="c-form__error" role="alert">{{ errors.name }}</span>
      </div>
      <div class="c-form__field" :class="{ 'c-form__field--error': errors.email }">
        <label class="c-form__label" for="cf-email">Email Address <span aria-hidden="true">*</span></label>
        <input id="cf-email" class="c-form__input" type="email" v-model="form.email" autocomplete="email" />
        <span v-if="errors.email" class="c-form__error" role="alert">{{ errors.email }}</span>
      </div>
    </div>
    <div class="c-form__field">
      <label class="c-form__label" for="cf-phone">Phone Number</label>
      <input id="cf-phone" class="c-form__input" type="tel" v-model="form.phone" autocomplete="tel" />
    </div>
    <div class="c-form__field" :class="{ 'c-form__field--error': errors.message }">
      <label class="c-form__label" for="cf-message">Message <span aria-hidden="true">*</span></label>
      <textarea id="cf-message" class="c-form__input c-form__input--textarea" v-model="form.message" rows="5" />
      <span v-if="errors.message" class="c-form__error" role="alert">{{ errors.message }}</span>
    </div>
    <button class="c-form__submit" type="submit" :disabled="formState === 'submitting'">
      {{ formState === 'submitting' ? 'Sending…' : 'Send Message' }}
    </button>
    <p v-if="formState === 'error'" class="c-form__error c-form__error--global" role="alert">
      Something went wrong. Please try calling us instead.
    </p>
  </form>

  <div v-else class="c-form__success" :class="{ 'c-form__success--light': !dark }">
    <p class="c-form__success-heading">Message sent!</p>
    <p>Thanks for getting in touch. We'll be back in touch within 24 hours.</p>
  </div>
</template>

<style lang="scss">
.c-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    &--error .c-form__input { border-color: #ff6b6b; }
  }

  &__label {
    font-size: var(--font-size--small);
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: rgba(255,255,255,0.7);
    span { color: rgba(255,255,255,0.4); }
  }

  &__input {
    width: 100%;
    background-color: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.2);
    color: var(--white);
    font-family: inherit;
    font-size: var(--font-size--body);
    padding: 1.2rem 1.6rem;
    outline: none;
    transition: border-color 0.2s ease, background-color 0.2s ease;

    &::placeholder { color: rgba(255,255,255,0.3); }
    &:focus { border-color: rgba(255,255,255,0.6); background-color: rgba(255,255,255,0.12); }
    &--textarea { resize: vertical; min-height: 12rem; }
  }

  &__error {
    font-size: var(--font-size--small);
    color: #ff6b6b;
    &--global { margin-top: 0; }
  }

  &__submit {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1.4rem 3.2rem;
    background-color: var(--white);
    color: var(--primary);
    border: 2px solid var(--white);
    font-family: inherit;
    font-size: var(--font-size--body);
    text-transform: uppercase;
    letter-spacing: .1rem;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover, &:focus { background-color: transparent; color: var(--white); }
    &:disabled { opacity: 0.6; cursor: not-allowed; }
  }

  &__success {
    padding: 3.2rem;
    border: 1px solid rgba(255,255,255,0.2);
    background-color: rgba(255,255,255,0.08);

    &-heading {
      color: var(--white);
      font-size: var(--font-size--h3);
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }

    p:last-child { color: rgba(255,255,255,0.7); margin-bottom: 0; }

    &--light {
      border-color: #e0e0e0;
      background-color: #f5f5f5;

      .c-form__success-heading { color: var(--primary); }
      p:last-child { color: #555; }
    }
  }

  // Light mode overrides (used on white backgrounds)
  &--light {
    .c-form__error { color: #c0392b; }
    .c-form__label { color: #333; span { color: #999; } }

    .c-form__input {
      background-color: #f5f5f5;
      border-color: #d0d0d0;
      color: var(--black);

      &::placeholder { color: #aaa; }
      &:focus { border-color: var(--primary); background-color: var(--white); }
    }

    .c-form__submit {
      background-color: var(--primary);
      color: var(--white);
      border-color: var(--primary);
      &:hover, &:focus { background-color: transparent; color: var(--primary); }
    }
  }
}
</style>
