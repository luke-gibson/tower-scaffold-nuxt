// const enableUsercentrics = process.env.ENABLE_USERCENTRICS === 'true'

// const headScripts = enableUsercentrics
//   ? [
//     {
//       src: 'https://web.cmp.usercentrics.eu/modules/autoblocker.js',
//       async: true
//     },
//     {
//       id: 'usercentrics-cmp',
//       src: 'https://web.cmp.usercentrics.eu/ui/loader.js',
//       async: true,
//       tagPosition: 'head',
//       'data-settings-id': 'XXQBxqLeWCYeGV'
//     } as any
//   ]
//   : []

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/strapi',
    '@nuxtjs/robots'
  ],
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL,
      siteUrl: 'https://towerscaffold-netting.co.uk',
    }
  },
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  site: { indexable: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: [
        {
          src: 'https://web.cmp.usercentrics.eu/modules/autoblocker.js',
          async: true
        },
        {
          id: 'usercentrics-cmp',
          src: 'https://web.cmp.usercentrics.eu/ui/loader.js',
          async: true,
          tagPosition: 'head',
          'data-settings-id': 'XXQBxqLeWCYeGV'
        } as any
      ]
    }
  },
});