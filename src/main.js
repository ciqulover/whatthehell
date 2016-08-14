import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Questions from './component/Questions.vue'
import View from './component/View.vue'


Vue.use(VueResource)
Vue.use(VueRouter)

let router = new VueRouter()
router.map({
  '/':{
    component:Questions
  },
  '/view':{
    component:View
  }
})

let App=Vue.extend({
  data(){
    return{

    }
  },
  http: {
    root: '/'
  },
})

router.start(App,'body')