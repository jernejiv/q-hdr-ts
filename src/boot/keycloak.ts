/*
import { boot } from 'quasar/wrappers'
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( { app} ) => {
  /!*function registerTokenInterceptor () {
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
      // config.headers['Authorization'] = `Bearer ${app.config.globalProperties.$keycloak.token}`

      return config
    }, )
  }*!/

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
        // registerTokenInterceptor()
        resolve()
      }
    })
  })
})
*/
