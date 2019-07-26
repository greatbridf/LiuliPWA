import App from 'src/index-component/app.vue'
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

var elem = document.createElement('div')
elem.id = 'app'
document.body.appendChild(elem)

var vue = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App ref="app"></App>',
  mounted () {
    ;(this.$refs.app as Vue).$emit('update_cache')
  }
})
