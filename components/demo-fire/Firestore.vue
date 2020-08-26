<template>
  <div>
    <h1>FireStore</h1>
    <br />
    <vs-card>
      <p>{{ InputText }}</p>
      <vs-input
        v-model="InputText"
        label="Add Text"
        type="text"
        class="my-3 w-full"
      />
      <vs-button @click="WriteFirebase">Submit</vs-button>
      <br />
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          {{ message.message }}
        </li>
      </ul>
    </vs-card>
    <pre class="my-8">
async writeToFirestore() {
  const messageRef = this.$fireStore.collection('message').doc('message')
  try {
    await messageRef.set({
      message: 'Nuxt-Fire with Firestore rocks!'
    })
  } catch (e) {
  alert(e)
  return
  }
  alert('Success.')
}
      </pre
    >
    <v-btn color="primary" outlined @click="readFromFirestore()"
      >Read from Firestore</v-btn
    >
    <pre class="mb-6">
async readFromFirestore() {
  const messageRef = this.$fireStore.collection('message').doc('message')
  try {
    const messageDoc = await messageRef.get()
    alert(messageDoc.data().message)
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
  data() {
    return {
      InputText: '',
      messages: []
    }
  },
  created() {
    const messageRef = this.$fireStore.collection('message')
    messageRef.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const doc = change.doc
        this.messages.push({
          id: doc.id,
          message: doc.data().message
        })
      })
    })
  },
  methods: {
    WriteFirebase() {
      const messageRef = this.$fireStore.collection('message')
      messageRef.add({
        message: this.InputText
      })
    }
  }
}
</script>

<style></style>
