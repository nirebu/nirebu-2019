<template>
  <footer class="footer">
    <div class="columns is-centered">
      <div class="column is-one-fifth">
        <div class="columns fa-lg has-text-centered is-narrow">
          <div class="column" v-for="(social,key) in socials" :key="key">
            <a :href="social.link" target="_blank">
              <font-awesome-icon :icon="[ 'fab' , social.icon ]" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content has-text-centered">
      <p><a href="https://github.com/nirebu/nirebu-2019">Coded by</a> &copy; Nicol&ograve; Rebughini with <a href="https://vuejs.org/">Vuejs</a> + <a href="https://nuxtjs.org/">Nuxtjs</a></p>
      <p>Hosted on <a href="https://netlify.com">Netlify</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { link: "https://github.com/nirebu", icon: "github" },
        { link: "https://linkedin.com/in/nicolo-rebughini", icon: "linkedin" },
        { link: "https://facebook.com/nicolo.rebughini", icon: "facebook" },
        { link: "https://instagram.com/nirebu", icon: "instagram" }
      ]
    };
  }
};
</script>
