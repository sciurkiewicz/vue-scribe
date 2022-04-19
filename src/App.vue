<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

      <v-sheet>
    <!-- <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
      </v-row>
    </v-container> -->

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
        dense
        rounded
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Strona Główna</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Projekty</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Lista To-Do</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Kalendarz</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ustawienia</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>

    <v-main class="grey lighten-2">
      <v-container>
        <!-- <v-card -->
          <!-- elevation="8" -->
          <!-- outlined> -->
             <!-- <div v-if="main.view===1"><Notes/></div> -->
        <Todo/>
        <!-- </v-card> -->
      </v-container>
    </v-main>
  </v-app>
  </template>

<script>
  import Todo from './components/Todo.vue'
  // import Calendar from './components/Calendar.vue'


  export default {
    name: "app",
              mounted() {
          this.todo = this.$store.getters.getState;
        },
      components: {
    // Notes,
    Todo,
    // Calendar,
    },
    data: () => ({
       drawer: null,
       todo: {}
    }),
    methods: {
      addTodo() {
        console.log("SQ")
      }
    }
  }
</script>