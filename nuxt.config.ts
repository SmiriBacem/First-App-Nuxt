// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app : {
    head: {
      title : "Nuxt Test",
      meta : [
        { name: 'description', content:'Apprendre nuxt 3'}
      ],
      link : [
        { rel : 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig : {
    currencyKey : process.env.CURRENCY_API_KEY,
  }
})
