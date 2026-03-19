// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages'
  },
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],
  css: [
    '~/tailwind.css'
  ],
  vite: {
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..']
      }
    },
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Kwan Wing's Profile",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kwanwing.hk Portfolio' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Architects+Daughter' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Outfit:wght@100..900&display=swap' }
      ]
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix'
  }
})
