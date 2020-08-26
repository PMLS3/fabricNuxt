<template>
  <iframe
    width="560"
    height="349"
    :src="vid.website"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: ['vid']
}
</script>

<style></style>
