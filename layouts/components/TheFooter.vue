<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <span
      >COPYRIGHT &copy; {{ new Date().getFullYear() }}
      <a
        href="https://1.envato.market/vuexy_admin"
        target="_blank"
        rel="nofollow"
        >Pixinvent</a
      >, All rights Reserved</span
    >
    <span class="md:flex hidden items-center">
      <span>Hand-crafted & Made with</span>
      <feather-icon
        icon="HeartIcon"
        svg-classes="stroke-current text-danger w-6 h-6"
        class="ml-2"
      />
    </span>

    <!-- buyNow component -->
    <component :is="injections.components.BuyNow"></component>
  </footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'

export default {
  name: 'TheFooter',
  props: {
    classes: {
      type: String
    }
  },
  inject: {
    components: {
      default: {
        BuyNow
      }
    }
  }
}
</script>
