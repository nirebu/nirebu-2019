<template>
  <footer class="text-center">
    <div>
      <div>
        <div class="flex justify-center">
          <div v-for="(social,key) in socials" :key="key" :class="key === socials.length - 1 ? '' : 'mr-6'">
            <a :href="social.link" target="_blank" :aria-label="social.label" rel="noopener">
              <font-awesome-icon :icon="[ 'fab' , social.icon ]" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
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
        { link: "https://github.com/nirebu", icon: "github" , label: "Check my Github profile" },
        { link: "https://dev.to/nirebu", icon: "dev" , label: "My blog on Dev.to" },
        { link: "https://twitter.com/nirebu", icon: "twitter" , label: "Find me on Twitter" },
        { link: "https://linkedin.com/in/nicolo-rebughini", icon: "linkedin" , label: "Fine me on Linkedin" },
      ]
    };
  }
};
</script>
