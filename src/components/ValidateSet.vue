<template>
  <v-card>
    <v-card-text>
      <h4>Validate a dataset</h4>

      <div>
        Pick a color: {{ color }}

        <v-color-picker v-model="color" hide-inputs class="ma-2" dot-size="20"></v-color-picker>
      </div>
      <v-btn
        icon
        @click="closeDialog"
        title="Close and cancel validation"
        aria-label="Close and cancel validation"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["set"],
  components: {},
  data: () => ({
    color: "#9bbfc6",
  }),
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
  computed: {},
};
</script>
