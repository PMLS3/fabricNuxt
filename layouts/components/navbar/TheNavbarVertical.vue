<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div class="relative">
    <div class="vx-navbar-wrapper" :class="classObj">
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton"
        :color="navbarColorLocal"
        :class="textColor"
      >
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <feather-icon
          class="p-2 cursor-pointer sm:inline-flex xl:hidden"
          icon="MenuIcon"
          @click.stop="showSidebar"
        />

        <nuxt-link tag="div" to="/" class="flex items-center mx-auto cursor-pointer vx-logo">
          <logo class="w-10 mr-4 fill-current text-primary" alt="logo" />
        </nuxt-link>
        <!-- <p v-if="currentlyDisplayingUser" class="font-semibold">"Guest"</p> -->
        <!-- <p  class="font-semibold"> Guest</p> -->

        <!-- <bookmarks
          :navbarColor="navbarColor"
          v-if="windowWidth >= 992 && showNav.bookmarksNow"
        />-->
        <!-- <bookmarks
          :navbarColor="navbarColor"
          v-if="windowWidth >= 992 && showNav.bookmarksNow"
        />-->

        <vs-spacer />

        <!-- <i18n /> -->

        <!-- <search-bar /> -->

        <!-- <cart-drop-down /> -->

        <!-- <notification-drop-down  /> -->

        <!-- <profile-drop-down  /> -->

        <feather-icon icon="LogOutIcon" class="ml-3" svg-classes="w-4 h-4" @click="logout" />
        <span class="ml-2">Logout</span>
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Logo from '../Logo.vue'
import Bookmarks from './components/Bookmarks.vue'
// import I18n from "./components/I18n.vue";
import SearchBar from './components/SearchBar.vue'
import CartDropDown from './components/CartDropDown.vue'
import NotificationDropDown from './components/NotificationDropDown.vue'
import ProfileDropDown from './components/ProfileDropDown.vue'

export default {
  name: 'TheNavbarVertical',
  components: {
    Logo,
    Bookmarks,
    // I18n,
    SearchBar,
    CartDropDown,
    NotificationDropDown,
    ProfileDropDown
  },
  props: {
    navbarColor: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {}
  },
  computed: {
    showNav() {
      return this.$store.getters['navbar/showNav']
    },
    currentlyDisplayingUser() {
      return this.$store.getters['userManagement/currentlyDisplayingUser']
    },
    currentDisplayUser() {
      return this.$store.getters['userManagement/currentDisplayUser']
    },

    navbarColorLocal() {
      return this.$store.state.theme === 'dark' && this.navbarColor === '#fff'
        ? '#10163a'
        : this.navbarColor
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor() {
      return {
        'text-white':
          (this.navbarColor != '#10163a' &&
            this.$store.state.theme === 'dark') ||
          (this.navbarColor != '#fff' && this.$store.state.theme !== 'dark')
      }
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == 'default') return 'navbar-default'
      else if (this.verticalNavMenuWidth == 'reduced') return 'navbar-reduced'
      else if (this.verticalNavMenuWidth) return 'navbar-full'
    }
  },
  methods: {
    showSidebar() {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
    },
    logout() {
      // if user is logged in via firebase

      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login').catch(() => {})
        })
      // If JWT login
      //   if (localStorage.getItem("accessToken")) {
      //     localStorage.removeItem("accessToken");
      //     this.$router.push("/pages/login").catch(() => {});
      //   }

      // Change role on logout. Same value as initialRole of acj.js
      //   this.$acl.change("admin");
      //   localStorage.removeItem("userInfo");

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>
