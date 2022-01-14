<template>
  <div v-if="datasets && currentDataset">
      <!-- {{currentDataset}} -->
<v-select v-model="currentDataset" :items="datasets" item-text="name" return-object  label="Dataset">

</v-select>
    <v-data-table

      :headers="headers"
      :items="currentDataset.items"
      hide-default-footer
      disable-pagination
    >
    </v-data-table>
<v-btn @click="validateDialog = true" color="primary" depressed><v-icon small left>mdi-check</v-icon>validate</v-btn>
<v-btn @click="editDialog = true" color="primary" depressed class="ml-1"><v-icon small left>mdi-pencil</v-icon>edit</v-btn>


   <v-dialog v-model="validateDialog" persistent>
     <ValidateSet @closeDialog="validateDialog = false" :set="currentDataset" />

    </v-dialog>
  </div>
</template>

<script>
import ValidateSet  from "@/components/ValidateSet.vue";
export default {
  props: [""],
  components: {ValidateSet},
  data: () => ({
      currentDataset: null,
      validateDialog: false,
    headers: [
      { text: "Product", value: "product", sortable: true },
      { text: "Color", value: "color", sortable: true },
      { text: "Price (CHF)", value: "price", sortable: true },
    ],
  }),
  created(){
this.currentDataset = this.$store.state.datasets[0]
  },
  methods: {},
  computed: {
        datasets() {
      return this.$store.state.datasets;
    },
  },
};
</script>
