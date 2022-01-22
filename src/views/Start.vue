<template>
  <v-container>
    <div class="d-flex">
      <v-spacer></v-spacer>
      <div>
        <v-btn @click="colorDialog = true" small text style="text-transform: inherit">
          Theme color:
          <v-icon color="primary">mdi-square-rounded</v-icon>
        </v-btn>
      </div>
    </div>
    <h1 class="text-center">Dictionary Manager</h1>

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
        <v-btn
          @click="dictionaryDialog = true"
          icon
          depressed
          color="primary"
          class="mr-1"
          title="Add a new dictionary set"
          aria-label="Add a new dictionary set"
          ><v-icon>mdi-note-plus</v-icon></v-btn
        >
      </div>

      <v-divider></v-divider>
      <v-card-text>
        <Dictionaries />
      </v-card-text>
    </v-card>

    <v-dialog v-model="dictionaryDialog" persistent>
      <NewDictionary @closeDialog="dictionaryDialog = false" />
    </v-dialog>

    <v-dialog v-model="colorDialog" max-width="400">
      <v-card>
        <v-card-text class="pt-3">
          <div class="text-center">color: {{ color }}</div>

          <v-color-picker
            @input="updateThemeColor(color)"
            v-model="color"
            hide-inputs
            class="ma-2 mx-auto"
            dot-size="20"
          ></v-color-picker>

          <div class="d-flex">
            <v-btn @click="resetColor" text>reset</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="colorDialog = false" color="primary">OK</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import colors from "vuetify/lib/util/colors";
import Datasets from "@/components/Datasets/Datasets.vue";
import Dictionaries from "@/components/Dictionaries/Dictionaries.vue";
import NewDictionary from "@/components/Dictionaries/NewDictionary.vue";
export default {
  props: [""],
  components: { Datasets, Dictionaries, NewDictionary },
  mounted() {
    this.color = this.$vuetify.theme.themes.light.primary.base;
  },
  data: () => ({
    dictionaryDialog: false,
    colorDialog: false,
    color: null,
  }),
  methods: {
    updateThemeColor(val) {
      this.$vuetify.theme.themes.light.primary = val;
    },
    resetColor() {
      this.$vuetify.theme.themes.light.primary = colors.teal;
      this.color = this.$vuetify.theme.themes.light.primary.base;
    },
  },
  computed: {},
};
</script>
