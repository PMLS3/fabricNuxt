<template functional>
  <div class="vx-input-group flex" :class="data.staticClass">
    <!-- SLOT: PREPEND -->
    <div
      v-if="slots().prepend"
      class="vx-input-group-prepend flex"
      :class="props.prependClasses"
    >
      <slot name="prepend"></slot>
    </div>

    <!-- SLOT: DEFAULT -->
    <div class="vx-input-group-default flex-grow">
      <slot></slot>
    </div>

    <!-- SLOT: APPEND -->
    <div
      v-if="slots().append"
      class="vx-input-group-append flex"
      :class="props.appendClasses"
    >
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VxInputGroup',
  props: {
    prependClasses: { type: String },
    appendClasses: { type: String }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/components/vxInputGroup.scss';
</style>
