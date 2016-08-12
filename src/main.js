import Vue from 'vue'
import Questions from './Questions.vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

new Vue({
  el: 'body',
  components: { Questions },
  http: {
    root: '/'
  },
})
