const Counter = {
  name: 'counter',
  computed: {
    ...Vuex.mapState(['counter'])
  },
  methods: {
    incCounter() {
      this.$store.commit('incCounter', 1);
    },
    decCounter() {
      this.$store.commit('decCounter', 1);
    }
  },
  template: `<div>
    <v-card outlined>
      <v-card-title>Counter</v-card-title>
      <v-card-text>
        <p>{{ counter }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text icon color="cyan" @click="incCounter">
          <v-icon>add_circle</v-icon>
        </v-btn>
        <v-btn text icon color="red" @click="decCounter">
          <v-icon>remove_circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>`
};

export default Counter;