const Main = Vue.component('main', {
  data() {
    return {
      hello: 'Hello Vue!',
      drawer: false,
    };
  },
  computed: {
    ...Vuex.mapState(['counter'])
  },
  template: `<div>
    <v-app>
      <v-navigation-drawer app v-model="drawer">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Vue Simple App
            </v-list-item-title>
            <v-list-item-subtitle>
              Menu
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item router to="/">
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/about">
            <v-list-item-icon>
              <v-icon>info</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="light-blue darken-1" dark>
        <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>HTML5 + Vue + Router + Vuex + Vuetify</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-card>
          <v-card-text>
            <p>{{ hello }}</p>

            <v-badge>
              <template v-slot:badge>{{ counter }}</template>
              <v-icon>alarm_add</v-icon>
            </v-badge>
          </v-card-text>
        </v-card>

        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>`
});

export default Main;