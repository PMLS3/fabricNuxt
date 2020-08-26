<template>
  <div>
    <h1>Firebase Authentication</h1>

    <vs-card v-if="!isLoggedIn">
      <h5>SignUp / LogIn</h5>
      <vs-input
        v-model="email"
        class="my-3 w-full"
        type="email"
        placeholder="email"
        >Email</vs-input
      >
      <vs-input
        v-model="password"
        class="my-3 w-full"
        type="password"
        placeholder="password"
        >Password</vs-input
      >

      <vs-button @click="signInUser()">Login</vs-button>
      <vs-button @click="createUser()">Register</vs-button>
    </vs-card>
    <vs-card v-else>
      <p>You are logged in with {{ authUser.email }}.</p>
      <vs-button color="primary" outlined @click="logout">Logout</vs-button>
    </vs-card>

    <vs-card>
      {{ isLoggedIn }}
    </vs-card>

    <pre class="my-8">
async createUser() {
  try {
    await this.$fireAuth.createUserWithEmailAndPassword(
      'foo@foo.foo',
      'test'
    )
  } catch (e) {
    alert(e)
  }
}</pre
    >
    <p class="mt-1 mb-6">
      This will throw a password error coming from Firebase, but proves the
      point.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    authUser() {
      return this.$store.state.authUser
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
    },
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async signInUser() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async logout() {
      try {
        await this.logoutUser()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style></style>
