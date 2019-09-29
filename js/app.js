import router from './router.js';
import store from './store.js';

// common
import Counter from './Counter.js';

var app = new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  data() {
    return {
      hello: 'Hello Vue!',
      drawer: false,
    };
  },
  computed: {
    ...Vuex.mapState(['counter'])
  }
}).$mount('#app');