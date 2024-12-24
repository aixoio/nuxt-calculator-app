export default {
  // Global page headers
  head: {
    title: 'nuxt-calculator-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS
  css: [
    '~/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [],

  // Modules
  modules: [],

  // Build Configuration
  build: {}
};