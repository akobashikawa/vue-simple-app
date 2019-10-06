const About = {
  name: 'about',
  data() {
    return {
      hello: 'Hello About!'
    };
  },
  template: `<div>
      <v-card>
        <v-card-title>About</v-card-title>
        <v-card-text>
          <p>{{ hello }}</p>
          <counter></counter>
        </v-card-text>
      </v-card>
    </div>`
};

export default About;