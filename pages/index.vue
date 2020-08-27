<template>
  <div class="board">
    <vs-button @click="toggleMode('pan')">Pan</vs-button>
    <vs-button @click="toggleMode('drawing')">Draw</vs-button>
    {{ currentMode }}
    <input v-model="colorPick" type="color" />
    <vs-button @click="clearCanvas(canvas)">Clear</vs-button>

    <vs-button @click="createRect()">Rect</vs-button
    ><vs-button @click="createCirc()">Circ</vs-button>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { fabric } from 'fabric'

export default {
  layout: 'fullPage',
  data() {
    return {
      mousePressed: false,
      selection: false,
      modes: {
        pan: 'pan',
        drawing: 'drawing'
      },
      currentMode: 'test',
      canvas: null,
      colorPick: '#000000'
    }
  },
  methods: {
    createRect() {
      const canvCenter = this.canvas.getCenter()
      console.log('canvCenter', canvCenter)
      const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'green',
        left: canvCenter.left,
        top: -50,
        originX: 'center',
        originY: 'center',
        cornerColor: 'white'
      })
      this.canvas.add(rect)
      rect.animate('top', canvCenter.top, {
        onChange: this.canvas.renderAll.bind(this.canvas)
      })
    },
    createCirc() {
      const canvCenter = this.canvas.getCenter()
      console.log('canvCenter', canvCenter)
      const circl = new fabric.Circle({
        radius: 50,

        fill: 'red',
        left: canvCenter.left,
        top: -50,
        originX: 'center',
        originY: 'center',
        cornerColor: 'white'
      })
      this.canvas.add(circl)
      circl.animate('top', this.canvas.height - 50, {
        onChange: this.canvas.renderAll.bind(this.canvas),
        onComplete: () => {
          circl.animate('top', canvCenter.top, {
            onChange: this.canvas.renderAll.bind(this.canvas),
            easing: fabric.util.ease.easeOutBounce,
            duration: 200
          })
        }
      })
    },
    toggleMode(mode) {
      if (mode === this.currentMode) {
        this.currentMode = ''
        this.canvas.isDrawingMode = false
      } else {
        this.currentMode = mode
        if (mode !== this.modes.drawing) {
          this.canvas.isDrawingMode = false
        }
      }
    },
    clearCanvas(canvas) {
      let vm = this
      this.canvas.getObjects().forEach(o => {
        console.log('o', o)
        if (o !== vm.canvas.backgroundImage) {
          vm.canvas.remove(o)
        }
      })
    },
    setPanEvents() {
      this.canvas.on('mouse:move', event => {
        console.log('over', this.mousePressed)
        if (this.mousePressed && this.currentMode == this.modes.pan) {
          this.canvas.setCursor('grab')
          this.canvas.renderAll()
          const mEvent = event.e
          console.log('mEvent.movementX', event.pointer.x)
          const delta = new fabric.Point(event.pointer.x, event.pointer.y)
          this.canvas.relativePan(delta)
        } else if (
          this.mousePressed &&
          this.currentMode === this.modes.drawing
        ) {
          // this.canvas.freeDrawingBrush = new fabric.CircleBrush(this.canvas)
          this.canvas.freeDrawingBrush.color = this.colorPick
          this.canvas.freeDrawingBrush.width = 5

          this.canvas.isDrawingMode = true
          this.canvas.renderAll()
        }
      })

      this.canvas.on('mouse:down', event => {
        console.log('down')
        this.mousePressed = true

        if (this.currentMode == this.modes.pan) {
          this.canvas.setCursor('crosshair')
          this.canvas.renderAll()
        }
      })

      this.canvas.on('mouse:up', event => {
        this.mousePressed = false
        this.canvas.setCursor('default')
        this.canvas.renderAll()
      })
    }
  },
  mounted() {
    // const this.canvas = new fabric.this.canvas('this.canvas', {
    //   width: 500,
    //   height: 500
    // })

    // this.canvas.renderAll()

    // fabric.Image.fromURL(
    //   'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=',
    //   img => {
    //     this.canvas.backgroundImage = img
    //     this.canvas.renderAll()
    //   }
    // )

    const initCanvas = id => {
      return new fabric.Canvas(id, {
        width: 500,
        height: 500,
        selection: this.selection
      })
    }

    const setBackground = (url, canvas) => {
      fabric.Image.fromURL(url, img => {
        this.canvas.backgroundImage = img
        this.canvas.renderAll()
      })
    }

    this.canvas = initCanvas('canvas')
    setBackground(
      'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=',
      this.canvas
    )
    this.setPanEvents(this.canvas)
  }
}
</script>

<style>
.board {
  width: 100%;
  height: 100%;
}
</style>
