<template>
  <div>
    <h1>Messaging</h1>
    <vs-card>
      <vs-button
        :disabled="listenersStarted"
        color="primary"
        outlined
        @click="startListeners"
        >Start Listeners</vs-button
      >
      <vs-button
        :disabled="permissionGranted || !listenersStarted"
        color="primary"
        outlined
        @click="requestPermission"
        >Request Permission</vs-button
      >
      <vs-button
        :disabled="!listenersStarted || !permissionGranted || idToken !== ''"
        color="primary"
        outlined
        @click="getIdToken"
        >Get ID Token</vs-button
      >
      <p>ID Token:</p>
      {{ idToken }}
    </vs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listenersStarted: false,
      permissionGranted: false,
      idToken: ''
    }
  },
  methods: {
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission()
        this.permissionGranted = permission === 'granted'
      } catch (e) {
        console.error(e)
      }
    },
    async getIdToken() {
      let currentToken
      try {
        currentToken = await this.$fireMess.getToken()
      } catch (e) {
        console.error('An error occurred while retrieving token. ', e)
        this.idToken = ''
      }
      if (currentToken) {
        this.idToken = currentToken
      } else {
        // Show permission request.
        console.info(
          'No Instance ID token available. Request permission to generate one.'
        )
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        this.idToken = ''
      }
    },
    startListeners() {
      this.startOnMessageListener()
      this.startTokenRefreshListener()
      this.listenersStarted = true
    },
    startOnMessageListener() {
      this.$fireMess.onMessage((payload) => {
        console.info('Message received. ', payload)
      })
    },
    startTokenRefreshListener() {
      this.$fireMess.onTokenRefresh(async () => {
        try {
          const refreshedToken = await this.$fireMess.getToken()
          this.idToken = refreshedToken
        } catch (e) {
          console.error('Unable to retrieve refreshed token ', e)
        }
      })
    }
  }
}
</script>

<style></style>
