const Counter = () => import('./Counter.js');

const Home = {
  name: 'home',
  components: {Counter},
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
};

export default Home;