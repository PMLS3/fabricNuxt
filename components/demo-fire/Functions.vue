<template>
  <div>
    <h1>Firebase Functions</h1>
    <vs-card>
      <vs-button @click="callTestFunction()">Call Test Function</vs-button>
    </vs-card>
    <p class="mt-8">Might take some seconds.</p>
    <pre>
async callTestFunction() {
  try {
    const res = await this.$fireFunc.httpsCallable('testFunction')()
    alert(res.data)
  } catch (e) {
    alert(e)
    return
  }
}</pre
    >
  </div>
</template>

<script>
export default {
  methods: {
    async callTestFunction() {
      try {
        const res = await this.$fireFunc.httpsCallable('testFunction')()
        alert(res.data.message)
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style></style>
