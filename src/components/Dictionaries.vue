<template>
  <div     v-if="dictionary">
    <h4>{{dictionary.name}}</h4>
    <v-data-table

      :headers="headers"
      :items="dictionary.items"
      hide-default-footer
      disable-pagination
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    headers: [
      { text: "Domain", value: "domain", sortable: true },
      { text: "Range", value: "range", sortable: true },
    ],
  }),
  methods: {},
  computed: {
    dictionary() {
      return this.$store.state.dictionaries[0];
    },
  },
};
</script>
