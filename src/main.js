// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design';

Vue.config.productionTip = false
//配置myMixin
import myMixin from './person/myMixin/myMixin.js';
Vue.use( myMixin(['home']) );

//使用view UI组件
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
