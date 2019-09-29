const Home = Vue.component('home', {
  data() {
    return {
      hello: 'Hello Home!',
    };
  },
  template: `<div>
      <v-card>
        <v-card-title>Home</v-card-title>
        <v-card-text>
          <p>{{ hello }}</p>
          <counter></counter>
        </v-card-text>
      </v-card>
    </div>`
});

export default Home;