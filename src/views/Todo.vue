<template>
<div>


    <!-- {{todo.tasks}} -->
          <v-card
    class="mx-auto"
    elevation="8"
    outlined
  >
    <v-btn
      color="primary"
      dark
      block
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn>
    <v-list subheader two-line>
      <v-list-item v-for="task in tasks" :key="task.id">
        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="task.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="red" @click="tasks.splice(tasks.indexOf(task), 1)"
              >mdi-delete</v-icon
            >
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    </v-card>

        <v-row justify="center">
      <v-dialog v-model="dialog" width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Nowa Notatka</span>
          </v-card-title>
                        <v-list-item three-line>
                <v-list-item-content>
                  <v-text-field
                    v-model="message"
                    label="Treść"
                    required
                  ></v-text-field>
                  <v-btn block color="primary" @click="addTodo">
                    Dodaj Notatkę
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">
              Zamknij
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    </div>
</template>

<script>
export default {
  name: 'Notes',
      mounted() {
        this.tasks = this.$store.getters.getState;
      },

  data: () => ({
           tasks: {},
           dialog: false,
  }),
      methods: {
    addTodo() {
      this.tasks.push({
      title: this.message,
      date: "",
      isComplete: false,})
    }
    // deleteNote() {
    // }
  }
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
