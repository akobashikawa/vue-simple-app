import router from './router.js';
import store from './store.js';

import Main from './Main.js';

// common
import Counter from './Counter.js';

var app = new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(Main),
}).$mount('#app');