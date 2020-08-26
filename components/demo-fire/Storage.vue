<template>
  <div>
    <h1>Storage</h1>
    <vs-card>
      <vs-button @click="uploadFile()">Upload File</vs-button>

      <vs-button class="mt-5" outlined @click="getFileUrl()"
        >Get File URL</vs-button
      >
    </vs-card>
    <pre class="my-8">
async uploadFile() {
  const storageRef = this.$fireStorage.ref().child('message.txt')
  const message = 'Nuxt-Fire with Firebase Storage rocks!'
  try {
    const snapshot = await storageRef.putString(message)
    alert('File uploaded.')
  } catch (e) {
    alert(e.message)
  }
}
      </pre
    >
    <pre>
async getFileUrl() {
  const storageRef = this.$fireStorage.ref().child('message.txt')
  try {
    const url = await storageRef.getDownloadURL()
    alert(`The file can be found here: ${url}`)
  } catch (e) {
    alert(e.message)
  }
}
      </pre
    >
  </div>
</template>

<script>
export default {
  methods: {
    async uploadFile() {
      const storageRef = this.$fireStorage.ref().child('message.txt')
      const message = 'Nuxt-Fire with Firebase Storage rocks!'
      try {
        const snapshot = await storageRef.putString(message)
        alert('File uploaded.')
      } catch (e) {
        alert(e.message)
      }
    },
    async getFileUrl() {
      const storageRef = this.$fireStorage.ref().child('message.txt')
      try {
        const url = await storageRef.getDownloadURL()
        alert(`The file can be found here: ${url}`)
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>

<style></style>
