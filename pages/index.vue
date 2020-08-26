<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { fabric } from 'fabric'

export default {
  layout: 'fullPage',
  components: {},

  mounted() {
    // const canvas = new fabric.Canvas('canvas', {
    //   width: 500,
    //   height: 500
    // })

    // canvas.renderAll()

    // fabric.Image.fromURL(
    //   'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=',
    //   img => {
    //     canvas.backgroundImage = img
    //     canvas.renderAll()
    //   }
    // )

    const initCanvas = id => {
      return new fabric.Canvas(id, {
        width: 500,
        height: 500
      })
    }

    const setBackground = (url, canvas) => {
      fabric.Image.fromURL(url, img => {
        canvas.backgroundImage = img
        canvas.renderAll()
      })
    }

    const canvas = initCanvas('canvas')
    setBackground(
      'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=',
      canvas
    )

    canvas.on('mouse:over', e => {
      console.log(e)
    })
  }
}
</script>

<style></style>
