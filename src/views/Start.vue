<template>
  <v-container>
    <h1 class="text-center">Dictionary Management app</h1>

    <v-card outlined class="">
        <h3 class="pa-2">Datasets</h3>
        <v-divider></v-divider>
      <v-card-text>
        <Datasets />
      </v-card-text>
    </v-card>

    <v-card outlined class="mt-10">
      <div class="d-flex justify-space-between align-center">
 <h3 class="pa-2">Dictionaries</h3>
 <v-btn @click="dictionaryDialog = true" icon depressed color="primary" class="mr-1" title="Add a new dictionary set" aria-label="Add a new dictionary set"><v-icon>mdi-note-plus</v-icon></v-btn>
      </div>
       
        <v-divider></v-divider>
      <v-card-text>
        <Dictionaries />
      </v-card-text>
    </v-card>

    <v-dialog v-model="dictionaryDialog" persistent>
     <NewDictionary @closeDialog="dictionaryDialog = false" />

    </v-dialog>
  </v-container>
</template>

<script>
import Datasets from "@/components/Datasets.vue";
import Dictionaries from "@/components/Dictionaries.vue";
import NewDictionary from "@/components/NewDictionary.vue";
export default {
  props: [""],
  components: { Datasets, Dictionaries, NewDictionary },
  data: () => ({
    dictionaryDialog: false
  }),
  methods: {},
  computed: {},
};
</script>
