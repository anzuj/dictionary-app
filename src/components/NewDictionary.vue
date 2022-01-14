<template>
  <v-card>
    <div class="d-flex justify-space-between align-center pa-3">
      <h4>Add a new dictionary</h4>
      <v-btn
        icon
        @click="closeDialog"
        title="Close and cancel creating a new dictionary"
        aria-label="Close and cancel creating a new dictionary"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-card-text>
      <v-img :src="require('../assets/arrow-right.png')" class="mx-auto" contain height="40" />
      <v-row>
        <v-col>
          <v-text-field
            dense
            v-model.trim="domain"
            placeholder="domain"
            solo
            background-color="teal lighten-5"
            flat
            hide-details
            @keydown.enter="addSet"
          ></v-text-field>
          <v-text-field
            dense
            v-model.trim="range"
            placeholder="range"
            solo
            background-color="teal lighten-5"
            flat
            hide-details
            class="mt-1"
            @keydown.enter="addSet"
          ></v-text-field>

          <v-alert v-if="!!error" type="error" text outlined dense class="mt-1">
            {{ error }}
          </v-alert>
          <v-btn small @click="addSet" class="mt-1" outlined color="primary lighten-1"
            ><v-icon left small>mdi-plus</v-icon>add</v-btn
          >
        </v-col>

        <v-col>
          <v-card v-if="set.length < 1" flat style="border: dotted 3px #E0F2F1">
            <v-card-text>
              <div class="text-center">
                Nothing here yet!
              </div>
            </v-card-text>
          </v-card>

          <div v-else>
            <v-card v-for="setPair in set" :key="setPair.domain" outlined class="px-2 py-1 mb-1">
              {{ setPair.domain }} <v-icon small class="mx-1">mdi-arrow-right-bold</v-icon>
              {{ setPair.range }}
            </v-card>
          </div>
        </v-col>
      </v-row>

      <v-btn large color="primary" class="mx-auto d-flex" :disabled="set.length < 1"
        >save set</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    set: [], //collection of domain/range pairs
    domain: null,
    range: null,
    error: null,
    // addedSet: 0 //styling variable to trigger CSS animation
  }),
  methods: {
    addSet() {
      this.error = null;

      // stop if values identical
      if (this.domain === this.range) {
        this.error = "Values can't be identical";
        return;
      }

      // stop if one of the fields not entered
      if (!this.domain || !this.range) {
        this.error = "Please fill out both fields!";
        return;
      } else {
        // check if either value already exists
        let noConflicts = true;
        if (this.set.length > 0) {
          this.set.forEach((item) => {
            if (
              item.domain === this.domain ||
              item.domain === this.range ||
              item.range === this.domain ||
              item.range === this.range
            ) {
              this.error =
                "At least one of these values already exists in the set. Please add only unique pairings to avoid conflicts in dictionary validation";
              noConflicts = false;
              return;
            }
          });
        }

        if (noConflicts) {
          // if all good, add this domain/range pair to the set
          this.set.push({ domain: this.domain, range: this.range });

          // this.addedSet ++ //trigger animation

          //reset fields
          this.range = null;
          this.domain = null;
        }
      }
    },

    closeDialog() {
      this.range = null;
      this.domain = null;
      this.set = [];
      this.error = null;

      this.$emit("closeDialog");
    },
  },
  computed: {},
  watch: {},
};
</script>
