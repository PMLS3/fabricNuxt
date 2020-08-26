<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Analytics
    </h3>
    <div class="links">
      <vs-button color="primary" outlined @click="logEvent()"
        >Log Event</vs-button
      >
      <pre class="my-5">
async logEvent() {
  try {
    await this.$fireAnalytics.logEvent('analytics_button_clicked')
  } catch (e) {
    alert(e)
  }
}</pre
      >
      <p class="mt-1 mb-8">This will log an event in Firebase Analytics.</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  methods: {
    async logEvent() {
      try {
        await this.$fireAnalytics.logEvent('analytics_button_clicked')
        alert("Event 'analytics_button_clicked' logged to Google Analytics")
      } catch (e) {
        alert(e)
      }
    }
  }
})
</script>
