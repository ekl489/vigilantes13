// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//CSS
//import '../node_modules/bulma/css/bulma.css'
import '../node_modules/bulmaswatch/lux/bulmaswatch.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

// custom
//https://www.npmjs.com/package/string-similarity
var stringSimilarity = require('string-similarity')
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
