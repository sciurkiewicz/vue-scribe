<template>
<div>
  <v-btn block
  color="primary"
  @click="addTodo">
    Dodaj Notatkę
  </v-btn>
        <v-textarea
          filled
          name="input-7-4"
          label="Notatka"
        ></v-textarea>
        
 <v-list
      subheader
      two-line
    >
      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="folder.title"></v-list-item-title>

          <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

    </v-list>
</div>
</template>

<script>
  export default {
    name: 'Notes',

    data: () => ({
      folders: [
        {
          subtitle: 'Jan 9, 2014',
          title: 'Photos',
        },
        {
          subtitle: 'Jan 17, 2014',
          title: 'Recipes',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: 'Work',
        },
      ],
    }),
        methods: {
      addTodo() {
        console.log("SQ")
      }
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