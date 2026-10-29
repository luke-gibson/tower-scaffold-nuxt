export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://towerscaffold-netting.co.uk',
    }
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
  image: {
    densities: [1],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
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
