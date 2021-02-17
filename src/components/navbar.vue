<template>
  <nav
    id="main-navbar"
    role="navigation"
    aria-label="Main navigation"
    class="navbar is-dark is-fixed-top"
  >
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <router-link class="navbar-item" to="/">
            ! Add an image !
          </router-link>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link v-for="key in diveTripKeys" :key="key" class="navbar-item" :to="`/diving/${ key }`">
            {{ diveTrips[key].title }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
const diveData = require('./diving/dive-data.json');

export default {
  computed: {
    diveTripKeys: function () {
      return Object.keys(diveData);
    },

    diveTrips: function () {
      return diveData;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/components/navbar.sass";
</style>
