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
      siteUrl: 'https://towerscaffold-temporaryroof.co.uk',
    }
  },
  site: { 
    url: 'https://towerscaffold-temporaryroof.co.uk',
    name: 'Tower Scaffold and Temporary Roofing',
    indexable: true 
  },
  robots: {
    sitemap: 'https://towerscaffold-temporaryroof.co.uk/sitemap.xml'
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
          content: 'idZyJPjl42zHHDbB5EU2YHcHidYaKNdQA25xJdeigWg'
        }
      ]
    }
  },
  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-W8BGKLMV'
      }
    }
  },
});
