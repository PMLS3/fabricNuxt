<template>
  <div>
    <h1>Demo</h1>
    <div v-for="(component, index) in exampleComponents" :key="index">
      <hr />
      <component :is="component"></component>
    </div>
  </div>
</template>

<script>
import Auth from './Auth.vue'
import Firestore from './Firestore.vue'
import Functions from './Functions.vue'
import Storage from './Storage.vue'
import Performance from './Performance.vue'
import VuexStore from './VuexStore.vue'
import Analytics from './Analytics.vue'
import RemoteConfig from './RemoteConfig.vue'
import Messaging from './Messaging.vue'
export default {
  components: {
    Auth,
    Firestore,
    Functions,
    Storage,
    Performance,
    VuexStore,
    Analytics,
    RemoteConfig,
    Messaging
  },
  data: () => ({
    exampleComponents: [
      Auth,
      Firestore,
      Functions,
      Storage,
      Performance,
      Analytics,
      RemoteConfig,
      Messaging,
      VuexStore
    ]
  })
}
</script>

<style></style>
