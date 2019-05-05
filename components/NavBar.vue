<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
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
    <!--
      changed from nuxt.link to regular <a> to make the back button work, mixed with the state usage
      <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-primary" href="/blog/">Blog</a>
        </div>
      </div>
    </div>-->
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>
