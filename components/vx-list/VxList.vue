<!-- =========================================================================================
    File Name: VxList.vue
    Description: list Component
    Component Name: VxList
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <ul class="list">
    <li v-for="(item, index) in list" :key="index" class="list__item">
      <feather-icon :icon="rtlSpecificIcon" class="w-5 h-5 mr-1"></feather-icon
      ><span v-html="item"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VxList',
  props: {
    list: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      default: 'ChevronsRightIcon'
    }
  },
  computed: {
    rtlSpecificIcon() {
      let i = this.icon
      if (this.$vs.rtl) {
        i.includes('Left')
          ? (i = i.replace('Left', 'Right'))
          : i.includes('Right')
          ? (i = i.replace('Right', 'Left'))
          : null
      }
      return i
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/components/vxList.scss';
</style>
