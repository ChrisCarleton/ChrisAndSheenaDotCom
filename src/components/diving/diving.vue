<template>
  <div v-if="currentTrip">
    <PageTitle :title="currentTrip.title" />
  </div>
  <NotFound v-else />
</template>

<script>
import NotFound from '../not-found.vue';
import PageTitle from '../controls/page-title.vue';

const diveData = require('./dive-data.json');

export default {
  components: {
    NotFound,
    PageTitle,
  },

  computed: {
    currentTrip: function () {
      return diveData[this.$route.params.trip];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
