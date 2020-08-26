<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vs-sidebar
    v-model="isSidebarActiveLocal"
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
  >
    <div class="flex items-center justify-between px-6 mt-6">
      <h4>
        {{ Object.entries(this.data).length === 0 ? 'ADD NEW' : 'UPDATE' }} ITEM
      </h4>
      <feather-icon
        icon="XIcon"
        class="cursor-pointer"
        @click.stop="isSidebarActiveLocal = false"
      ></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <!-- <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl"> -->

    <div class="p-6">
      <!-- Product Image -->
      <vs-input
        v-model="title"
        v-validate="'required'"
        name="event-name"
        class="w-full"
        label-placeholder="Leave Type"
      ></vs-input>
      <div class="my-4">
        <small class="date-label">Start Date</small>
        <datepicker
          v-model="startDate"
          :language="$vs.rtl ? langHe : langEn"
          name="start-date"
          :disabled="disabledFrom"
        ></datepicker>
      </div>
      <no-ssr>
        <div class="my-4">
          <small class="date-label">End Date</small>
          <datepicker
            v-model="endDate"
            :language="$vs.rtl ? langHe : langEn"
            :disabled-dates="disabledDatesTo"
            name="end-date"
          ></datepicker>
        </div>
      </no-ssr>
    </div>
    <!-- </VuePerfectScrollbar> -->

    <div slot="footer" class="flex flex-wrap items-center p-6">
      <vs-button class="mr-6" :disabled="!isFormValid" @click="submitData"
        >Submit</vs-button
      >
      <vs-button
        type="border"
        color="danger"
        @click="isSidebarActiveLocal = false"
        >Cancel</vs-button
      >
    </div>
  </vs-sidebar>
</template>

<script>
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Datepicker from 'vuejs-datepicker'
import { en, he } from 'vuejs-datepicker/src/locale'
export default {
  components: {
    Datepicker
  },
  components: {
    VuePerfectScrollbar
  },
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      title: '',
      startDate: '',
      endDate: '',
      langHe: he,
      langEn: en,
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataId: null,
      dataName: '',
      dataCategory: null,
      dataImg: null,
      dataOrder_status: 'pending',
      dataPrice: 0,

      category_choices: [
        { text: 'Audio', value: 'audio' },
        { text: 'Computers', value: 'computers' },
        { text: 'Fitness', value: 'fitness' },
        { text: 'Appliance', value: 'appliance' }
      ],

      order_status_choices: [
        { text: 'Pending', value: 'pending' },
        { text: 'Canceled', value: 'canceled' },
        { text: 'Delivered', value: 'delivered' },
        { text: 'On Hold', value: 'on_hold' }
      ],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid() {
      return (
        !this.errors.any() &&
        this.dataName &&
        this.dataCategory &&
        this.dataPrice > 0
      )
    }
  },
  watch: {
    isSidebarActive(val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const { category, id, img, name, order_status, price } = JSON.parse(
          JSON.stringify(this.data)
        )
        this.dataId = id
        this.dataCategory = category
        this.dataImg = img
        this.dataName = name
        this.dataOrder_status = order_status
        this.dataPrice = price
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  methods: {
    initValues() {
      if (this.data.id) return
      this.dataId = null
      this.dataName = ''
      this.dataCategory = null
      this.dataOrder_status = 'pending'
      this.dataPrice = 0
      this.dataImg = null
    },
    submitData() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const obj = {
            id: this.dataId,
            name: this.dataName,
            img: this.dataImg,
            category: this.dataCategory,
            order_status: this.dataOrder_status,
            price: this.dataPrice
          }

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch('dataList/updateItem', obj).catch((err) => {
              console.error(err)
            })
          } else {
            delete obj.id
            obj.popularity = 0
            this.$store.dispatch('dataList/addItem', obj).catch((err) => {
              console.error(err)
            })
          }

          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
