import router from './router.js';
import store from './store.js';

import App from './App.js';

var app = new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app');