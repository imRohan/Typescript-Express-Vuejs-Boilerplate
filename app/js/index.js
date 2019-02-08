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
    name: 'Node-Express-VueJS-Typescript Boilerplate',
    response: null,
  },
  components: {

  },
  methods: {
    getDataFromExpressServer() {
      this.$http.get('YOUR_SERVER_IP_HERE/api/sample/hello').then((res) => {
        this.response = res.body
      })
    },
  },
})
