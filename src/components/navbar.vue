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
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/components/navbar.sass";
</style>
