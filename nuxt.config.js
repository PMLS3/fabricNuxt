module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // VUESAX
    'vuesax/dist/vuesax.css',
    // SCSS file in the project
    '~/assets/css/loader.css',
    // Tailwind
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/iconfont.css',
    // SCSS file in the project
    '~/assets/scss/main.scss',
    // Material Icons
    'material-icons/iconfont/material-icons.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuesax',
    { src: '~/plugins/globalComponents', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/main.css',
    purgeCSSInDev: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    '@nuxtjs/firebase',

    [
      'nuxt-sass-resources-loader',
      ['./assets/css/main.scss'],
      ['~/assets/css/loader.css'],
      ['~/assets/css/iconfont.css'],
      ['~/assets/scss/main.scss'],
      ['material-icons/iconfont/material-icons.css'],
      ['vuesax/dist/vuesax.css'],
      ['swiper/dist/css/swiper.min.css'],
      ['vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css']
    ]
  ],

  /*
   ** Firebase Config
   */
  firebase: {
    config: {
      production: {
        apiKey: 'AIzaSyDgWjG8-BvI9crK5Yw2FURpVFOoZilE3_c',
        authDomain: 'test-6a8f9.firebaseapp.com',
        databaseURL: 'https://test-6a8f9.firebaseio.com',
        projectId: 'test-6a8f9',
        storageBucket: 'test-6a8f9.appspot.com',
        messagingSenderId: '917819406042',
        appId: '1:917819406042:web:72b3f9873bbaf9e05ad7e3',
        measurementId: 'G-7SRMTNSWYE',
        fcmPublicVapidKey:
          'BHKeWNRzDbtlzmLSgEuLdUsPFdlA2Cn0Eg0dfOk56WEVLLObFYVUnZZ1u7_5M3eB8QSm4hBzk6PYu4CA6OgPv-A' // Sets vapid key for FCM after initialization
      },
      development: {
        apiKey: 'AIzaSyDgWjG8-BvI9crK5Yw2FURpVFOoZilE3_c',
        authDomain: 'test-6a8f9.firebaseapp.com',
        databaseURL: 'https://test-6a8f9.firebaseio.com',
        projectId: 'test-6a8f9',
        storageBucket: 'test-6a8f9.appspot.com',
        messagingSenderId: '917819406042',
        appId: '1:917819406042:web:72b3f9873bbaf9e05ad7e3',
        measurementId: 'G-7SRMTNSWYE',
        fcmPublicVapidKey:
          'BHKeWNRzDbtlzmLSgEuLdUsPFdlA2Cn0Eg0dfOk56WEVLLObFYVUnZZ1u7_5M3eB8QSm4hBzk6PYu4CA6OgPv-A' // Sets vapid key for FCM after initialization
      }
    },
    customEnv: false,
    onFirebaseHosting: false,
    services: {
      auth: {
        // Experimental Feature, use with caution.
        initialize: {
          onSuccessMutation: 'SET_AUTH_USER',
          onSuccessAction: null,
          onErrorMutation: null,
          onErrorAction: 'handleAuthError',
          ssr: true // Default
        }
      },
      firestore: {
        static: false, // default
        preload: false, // default
        chunkName:
          process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
        enablePersistence: true
      },
      functions: {
        location: 'us-central1', // Default
        emulatorPort: 12345
      },
      storage: true,
      realtimeDb: true,
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // Default
          minimumFetchIntervalMillis: 43200000 // Default
        },
        defaultConfig: {
          welcome_message: 'Welcome'
        }
      },
      messaging: {
        createServiceWorker: true
      }
    }
  },

  /*
   ** Purge CSS
   */
  purgeCSS: {
    enabled: false
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
