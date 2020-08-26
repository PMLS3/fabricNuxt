<template>
  <div
    v-if="userDetails.displayName"
    class="flex items-center the-navbar__user-meta"
  >
    <!-- <div class="flex items-center the-navbar__user-meta" > -->

    <div class="hidden leading-tight text-right sm:block">
      <p class="font-semibold">{{ userDetails.displayName || 'undefined' }}</p>
      <!-- <p class="font-semibold">Me</p> -->

      <small>Available</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <client-only>
        <div class="ml-3 con-img">
          <img
            v-if="userDetails.photoURL"
            key="onlineImg"
            :src="userDetails.photoURL"
            alt="user-img"
            width="40"
            height="40"
            class="block rounded-full shadow-md cursor-pointer"
          />
          <img
            v-else
            key="onlineImg"
            :src="companyDetails.downloadUrl"
            alt="user-img"
            width="40"
            height="40"
            class="block rounded-full shadow-md cursor-pointer"
          />
        </div>
      </client-only>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile')"
          >
            <feather-icon icon="UserIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <!-- <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})"
          >
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li> -->
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/calendar/vue-simple-calendar')"
          >
            <feather-icon icon="CalendarIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Calendar</span>
          </li>

          <!-- <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})"
          >
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})"
          >
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li> -->

          <!-- <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})"
          >
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li> -->

          <!-- <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/user/user-list-man')"
          >
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">MY TEAM</span>
          </li>
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/crm')"
          >
            <feather-icon icon="LayoutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">CRM</span>
          </li> -->
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push(`/dashboard-analytics`)"
          >
            <feather-icon icon="CheckSquareIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Dashboard </span>
          </li>
          <!--   <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push(`/m/${companyDetails.uniqueAppName}`).catch(() => {})"
                v-if="this.appType == 'backend' && userDetails.role == 'admin'"
          >
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">App </span>
          </li> -->

          <vs-divider class="m-1" />

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout"
          >
            <feather-icon icon="LogOutIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {}
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    },
    userDetails() {
      return this.$store.getters['userManagement/userDetails']
    },
    companyDetails() {
      return this.$store.getters['app/companyDetails']
    },
    resellerName() {
      return this.$store.getters['app/resellerName']
    },
    appType() {
      return this.$store.getters['app/appType']
    }
  },
 
  methods: {
    logout() {
      // if user is logged in via auth0

      // if user is logged in via firebase

      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login').catch(() => {})
        })

      // If JWT login

      // Change role on logout. Same value as initialRole of acj.js

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>
