<template>
  <div>
    <div v-for="cat in Categories" :key="cat.id">
      <!-- <h4>{{cat.category}}</h4> -->
      <vs-row
        v-for="contact in contacts"
        :key="contact.id"
        vs-align="flex-start"
        vs-type="flex"
        vs-justify="center"
        vs-w="12"
      >
        <vx-card
          v-if="cat.category == contact.category"
          class="p-2 mt-5 ml-5 mr-5"
        >
          <div class="text-center">
            <h4>{{ contact.name }}</h4>
          </div>
          <vs-avatar
            class="block mx-auto my-6"
            size="80px"
            :src="contact.downloadURL"
          />
          <div class="flex justify-between mt-6 mb-8 text-center">
            <span v-html="contact.htmlForEditor"></span>
          </div>

          <vs-row
            vs-align="flex-start"
            vs-type="flex"
            vs-justify="center"
            vs-w="12"
          >
            <vs-col vs-type="flex" vs-justify="center" vs-align="center">
              <a :href="`${contact.website}`" target="_blank">
                <vs-button
                  :style="
                    `background-size: cover; background-repeat: no-repeat;`
                  "
                  icon="public"
                ></vs-button>
              </a>
              <a :href="`tel:${contact.number}`">
                <vs-button
                  :style="
                    `background-size: cover; background-repeat: no-repeat; background-color: `
                  "
                  icon="speaker_phone"
                  class="ml-2"
                ></vs-button>
              </a>
              <a :href="`mailto:${contact.email}`">
                <vs-button
                  :style="
                    `background-size: cover; background-repeat: no-repeat;  `
                  "
                  icon="mail"
                  class="ml-2"
                ></vs-button>
              </a>
              <a
                :href="
                  `http://www.google.com/maps/place/${contact.lat},${contact.lng}`
                "
                target="_blank"
              >
                <vs-button
                  :style="
                    `background-size: cover; background-repeat: no-repeat;    `
                  "
                  icon="person_add"
                  class="ml-2"
                ></vs-button>
              </a>
            </vs-col>
          </vs-row>
        </vx-card>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contacts', 'Categories'],
  computed: {},
  created() {
    console.log('com', this.contacts)
  }
}
</script>

<style scoped>
h4 {
  text-align: center;
  margin-top: 5px;
}
</style>
