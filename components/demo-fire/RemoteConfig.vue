<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase RemoteConfig
    </h3>
    <div class="links">
      <vs-button color="primary" outlined @click="readRemoteConfig()"
        >Reads Remote Config</vs-button
      >
    </div>
    <pre class="my-8">
async readRemoteConfig() {
  try {
    await this.$fireConfig.fetchAndActivate();
  } catch (e) {
  alert(e);
  return;
  }
  const exampleMessage = await this.$fireConfig.getValue("exampleMessage");
  alert(
  `Success. Read RemoteConfig parameter 'exampleMessage' is: ${exampleMessage._value}`
  );
}
</pre
    >
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  methods: {
    async readRemoteConfig() {
      try {
        await this.$fireConfig.fetchAndActivate()
      } catch (e) {
        alert(e)
        return
      }
      console.info(this.$fireConfig)
      const exampleMessage = await this.$fireConfig.getValue('exampleMessage')
      alert(
        `Success. Read RemoteConfig parameter 'exampleMessage' is: ${exampleMessage._value}`
      )
    }
  }
})
</script>
