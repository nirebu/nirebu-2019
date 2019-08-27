<template>
  <nav class="flex justify-between items-center p-3 bg-white shadow-lg" role="navigation" aria-label="main navigation">
    <nuxt-link class="font-mono text-2xl font-bold text-purple-600" to="/">#! /nirebu</nuxt-link>
    <nuxt-link class="px-3 py-1 rounded bg-purple-600 text-white font-semibold" to="/blog/">Blog</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
