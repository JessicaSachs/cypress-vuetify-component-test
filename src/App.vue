<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <div>Super</div>

    <v-content>
      <DataTable data-test="data-table"/>
      <Badge data-test="badge"/>
      <Banner data-test="banner"/>
      <Treeview data-test="tree-view"/>
      <ul data-test="icon-collection">
        <li v-for="icon in iconClasses" :key="icon">
          <v-icon>{{ icon }}</v-icon>
        </li>
      </ul>
      <HelloWorld data-test="hello-world"/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import iconClasses from './iconClasses'
import DataTable from './components/DataTable';
import Badge from './components/Badge'
import Banner from './components/Banner'
import Treeview from './components/Treeview'

export default {
  name: 'App',

  computed: {
    iconClasses() { return iconClasses },
  },
  components: {
    HelloWorld,
    DataTable,
    Badge,
    Banner,
    Treeview
  },

  data: () => ({
    //
  }),
};
</script>
