const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    incCounter(state, delta) {
      state.counter += delta;
    },
    decCounter(state, delta) {
      state.counter -= delta;
    }
  },
  actions: {

  }
});

export default store;