
const userDefaults = {
  uid         : 0,          // From Auth
  displayName : "John Doe", // From Auth
  about       : "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  photoURL    : require("@/assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
  status      : "online",
  userRole    : "admin"
}

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

export const state = () => ({
    AppActiveUser           : userDefaults,
    isVerticalNavMenuActive : false,
    verticalNavMenuWidth    : "default",
    verticalNavMenuItemsMin : false,
    scrollY                 : 0,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,

  })

  export const mutations = {
  

  TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
    state.isVerticalNavMenuActive = value
  },
  TOGGLE_REDUCE_BUTTON(state, val) {
    state.reduceButton = val
  },
  UPDATE_MAIN_LAYOUT_TYPE(state, val) {
    state.mainLayoutType = val
  },
  UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
    state.verticalNavMenuItemsMin = val
  },
  UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
    state.verticalNavMenuWidth = width
  },
  UPDATE_WINDOW_WIDTH(state, payload){
    console.log('paylo')
  }


  }

  export const actions = {

    // Vertical NavMenu
    updateVerticalNavMenuWidth({ commit }, width) {
      commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },
    async nuxtServerInit({ dispatch }, ctx) {
        if (this.$fireAuth === null) {
          throw 'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
        }
    
        if (ctx.$fireAuth === null) {
          throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
        }
    
        if (ctx.app.$fireAuth === null) {
          throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
        }
    
        console.info(
          'Success. Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
        )
    
        /** Get the VERIFIED authUser from the server */
        if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
          const { allClaims: claims, ...authUser } = ctx.res.locals.user
      
          console.info(
            'Auth User verified on server-side. User: ',
            authUser,
            'Claims:',
            claims
          )
    
          await dispatch('onAuthStateChanged', {
            authUser,
            claims
          })
    
        }
      },
    
      onAuthStateChanged({ commit }, { authUser }) {
        if (!authUser) {
          commit('RESET_STORE')
          return
        } 
        commit('SET_AUTH_USER', { authUser })
      },
    checkVuexStore(ctx) {
        if (this.$fireAuth === null) {
          throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
        }
    
        alert(
          'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
        )
        return
      }

 

   
  }


  export const getters = {

  }

  export const strict = false