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
.main-container {
  background: whitesmoke;
  height: 400px;
  margin-top: 20px;
}
</style>
