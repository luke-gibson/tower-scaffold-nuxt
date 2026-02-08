export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/strapi',
    '@nuxt/scripts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
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
  site: { 
    url: 'https://towerscaffold-netting.co.uk',
    name: 'Tower Scaffold Netting',
    indexable: true 
  },
  robots: {
    sitemap: 'https://towerscaffold-netting.co.uk/sitemap.xml'
  },
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
      meta: [
        {
          name: 'google-site-verification',
          content: 'JnW-K5-fxR2V0qJ0GhoqJyC6nrLeSmwJWlDvJFKpbDM'
        }
      ]
    }
  },
  // @ts-ignore
  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-WDHC4X9J'
      }
    }
  },
});
