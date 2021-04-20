// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import ElementUI from 'element-ui';
import axios from 'axios'			//插入依赖
Vue.prototype.$axios = axios	
axios.defaults.baseURL = '/api'

import './index.css'

//字体图标
import '../static/icon/iconfont.css'
import '../static/icon/iconfont.js'
import '../static/icon02/iconfont.css'
import '../static/icon02/iconfont.js'
//配置myMixin
import myMixin from './person/myMixin/myMixin.js';
Vue.use( myMixin(['']) );

//使用view UI组件
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.directive('title', {//更改页面标题
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
