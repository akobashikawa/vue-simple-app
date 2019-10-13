const Counter = () => import('./Counter.js');

const About = {
  name: 'about',
  components: { Counter },
  data() {
    return {
      hello: 'Hello About!',
      showCounter: false
    };
  },
  template: `<div>
      <v-card>
        <v-card-title>About</v-card-title>
        <v-card-text>
          <p>{{ hello }}</p>

          <v-btn @click="showCounter=true">Counter</v-btn>
          
        </v-card-text>
      </v-card>

      <v-dialog persistent v-model="showCounter">
        <v-card>
          <counter></counter>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn text @click="showCounter=false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>`
};

export default About;