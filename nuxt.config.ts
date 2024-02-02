// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@sidebase/nuxt-auth','@sidebase/nuxt-session'],
  auth: {
    isEnabled: true,
    provider: {
        type: 'authjs'
    }
  },
  runtimeConfig: {
    public: {
      apiUrl:'http://localhost:8080/api',
    }
  },
  css:[
    'bootstrap/dist/css/bootstrap.css'
  ]
})
