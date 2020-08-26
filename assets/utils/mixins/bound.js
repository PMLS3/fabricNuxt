export default {
  data() {
    return {
      dimensions: {
        width: 0,
        height: 0
        // viewBox: '0 0 700 700'
      }
    }
  },
  methods: {
    updateDimensions() {
      // _.debounce(() => {
      if (process.client) {
        this.$nextTick(() => {
          const bounds = (this.$refs.svg || this.$el).getBoundingClientRect()
          this.dimensions.width = bounds.width
          this.dimensions.height = bounds.height
        })
      }
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('resize', this.updateDimensions)
      this.updateDimensions()
    }
  },
  activated() {
    if (process.client) {
      window.addEventListener('resize', this.updateDimensions)
    }
  },
  deactivated() {
    if (process.client) {
      window.removeEventListener('resize', this.updateDimensions)
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.updateDimensions)
    }
  }
}
