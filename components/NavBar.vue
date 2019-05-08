<template>
  <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <div class="title nirebu-title has-background-gradient">
          <nuxt-link to="/">#! /nirebu</nuxt-link>
        </div>
      </div>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
      <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link class="button is-primary" to="/blog/">Blog</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>
