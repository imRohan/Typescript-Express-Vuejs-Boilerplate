// Made with love by Rohan Likhite

// Javascripts
import Vue from 'vue'
import VueResource from 'vue-resource'

// Components

// CSS
require('css/main.scss')

// VueJs
Vue.use(VueResource)

const boilerplate = new Vue({
  el: '.app',
  data: {
    name: 'node-express-vuejs Boilerplate',
    response: null,
  },
  components: {

  },
  methods: {
    getDataFromExpressServer() {
      this.$http.get('http://localhost:3000/sample').then((res) => {
        this.response = res.body
      })
    }
  },
})
