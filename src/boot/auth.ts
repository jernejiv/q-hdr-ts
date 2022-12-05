/*
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import axios, { AxiosRequestConfig } from 'axios';
import { boot } from 'quasar/wrappers';

export default async boot(({ app, router, store }) => {
  function registerTokenInterceptor () {
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
      config.headers['Authorization'] = `Bearer ${app.config.globalProperties.$keycloak.token}`

      return config
    }, null, { synchronous: true })
  }

  return new Promise(resolve => {
    app.use(VueKeyCloak, {
      init: {
        onLoad: 'login-required', // or 'check-sso'
        flow: 'standard',
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        checkLoginIframe: false // otherwise it would reload the window every so seconds
      },
      config: {
        url: 'myurl',
        realm: 'myrealm',
        clientId: 'mylient',
      },
      onReady() {
        registerTokenInterceptor()
        resolve()
      }
    })
  })
})
*/
