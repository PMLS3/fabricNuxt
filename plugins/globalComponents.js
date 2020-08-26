/* =========================================================================================
  File Name: globalComponents.js
  Description: Here you can register components globally
  ----------------------------------------------------------------------------------------
 
========================================================================================== */

import Vue from 'vue'
import Verte from 'verte'
import 'verte/dist/verte.css'
import VuePerfectScrollbar from 'vue2-perfect-scrollbar'
import VueSvgGauge from 'vue-svg-gauge'
import * as VueGoogleMaps from 'vue2-google-maps'
import vSelect from 'vue-select'
import { longClickDirective } from 'vue-long-click'
import VueTelInput from 'vue-tel-input'
import VxTooltip from '../layouts/components/vx-tooltip/VxTooltip.vue'
import VxInputGroup from '../components/vx-input-group/VxInputGroup.vue'
import FeatherIcon from '../components/FeatherIcon.vue'
import VxBreadcrumb from '../layouts/components/VxBreadcrumb.vue'
import VxList from '../components/vx-list/VxList.vue'
import VxCard from '../components/vx-card/VxCard.vue'

Vue.component(VuePerfectScrollbar.name, VuePerfectScrollbar)
Vue.component(VxTooltip.name, VxTooltip)
Vue.component(VxCard.name, VxCard)
Vue.component(VxList.name, VxList)
Vue.component(VxBreadcrumb.name, VxBreadcrumb)
Vue.component(FeatherIcon.name, FeatherIcon)
Vue.component(VxInputGroup.name, VxInputGroup)
Vue.component(Verte.name, Verte)

Vue.use(VueSvgGauge)
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'AIzaSyD71CLr4Y5Il5MHYyi6FcBVyspOnS6t1is',
    libraries: 'places' // This is required if you use the Auto complete plug-in
  }
})

// Set the components prop default to return our fresh components
vSelect.props.components.default = () => ({
  Deselect: {
    render: (createElement) =>
      createElement('feather-icon', {
        props: {
          icon: 'XIcon',
          svgClasses: 'w-4 h-4 mt-1'
        }
      })
  },
  OpenIndicator: {
    render: (createElement) =>
      createElement('feather-icon', {
        props: {
          icon: 'ChevronDownIcon',
          svgClasses: 'w-5 h-5'
        }
      })
  }
})

Vue.component(vSelect)

const longClickInstance = longClickDirective({
  delay: 100,
  interval: 50
})
Vue.directive('longclick', longClickInstance)

Vue.use(VueTelInput)
// import Geohash from "latlon-geohash";
// Vue.use(Geohash)
