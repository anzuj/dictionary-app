<template>
   <v-card>
         <div class="d-flex justify-space-between align-center pa-3">
      <h4>Validate a dataset</h4>
      <v-btn
        icon
        @click="closeDialog"
        title="Close and cancel validation"
        aria-label="Close and cancel validation"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
   </v-card>
</template>

<script>
export default {
    props: ["set"],
    components: {  },
    data: () => ({
    }),
    methods: {
          closeDialog() {

      this.$emit("closeDialog");
    },
    },
    computed: {}
};
</script>
