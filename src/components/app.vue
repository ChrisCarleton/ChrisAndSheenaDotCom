<template>
  <div class="container main-container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/components/navbar.sass";

.main-container {
  background: whitesmoke;
  height: 400px;
  border-radius: 8px;
  margin-top: $navbar-height;
  padding: 1em;
}
</style>
