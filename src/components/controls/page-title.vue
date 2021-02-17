<template>
  <h1>{{ title }}</h1>
</template>

<script>
const TitleSuffix = ' | Chris and Sheena';

export default {
  props: {
    title: String,
  },

  computed: {
    fullTitle: function () {
      return this.title + TitleSuffix;
    },
  },

  mounted: function () {
    console.log('Setting title:', this.fullTitle);
    document.title = this.fullTitle;
  },
};
</script>

<style lang="scss" scoped>
</style>
