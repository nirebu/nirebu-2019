<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand level">
        <div class="navbar-item">
          <div class="title nirebu-title has-background-gradient">#! /nirebu</div>
        </div>
      </div>
    </nav>
    <section class="hero is-fullheight-with-navbar is-primary has-bg-img">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Hello, I'm Nicol&ograve;!</h1>
          <h2 class="subtitle">Sysadmin and learner 🌱</h2>
        </div>
      </div>
    </section>
    <section class="bio has-background-gradient">
      <div class="container">
        <div class="columns is-centered has-text-centered is-narrow">
          <div class="column">
            <h1 class="title has-text-white">About me</h1>
            <div class="is-flex is-horizontal-center">
              <figure class="image is-128x128 profile-picture">
                <img class="is-rounded" src="~assets/images/profile.jpg">
              </figure>
            </div>
            <h2
              class="subtitle is-size-5 has-text-white"
            >I started my career as a video post production technician. In the last few years I focused mainly on process automation and quality control systems and recently I fully made the move to being a system&nbsp;administrator.</h2>
            <h2
              class="subtitle is-size-5 has-text-white"
            >My day to day consists in managing multiple MongoDB clusters and a huge amount of MTAs through the help of Ansible.</h2>
            <h2
              class="subtitle is-size-5 has-text-white"
            >On top of that I'm learning Full Stack Javascript web development exploring different frontend options available like React and Vue, with Node.js on the backend.</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section roles">
      <div class="container is-narrow">
        <div class="box">
          <div class="content has-text-centered">
            <div class="columns is-centered">
              <div class="column role">
                <h1 class="title nirebu-title has-background-gradient">#! /SysAdmin</h1>
                <p class="list-title has-text-primary has-text-weight-normal">Things I work on:</p>
                <ul>
                  <li>CentOS Linux</li>
                  <li>postfix</li>
                  <li>mongoDB</li>
                </ul>
                <p class="list-title has-text-primary has-text-weight-normal">Tools I use</p>
                <ul>
                  <li>Ansible</li>
                  <li>Too many regex</li>
                  <li>bash</li>
                </ul>
              </div>
              <div class="column role">
                <h1 class="title nirebu-title has-background-gradient">&lt;WebDev /&gt;</h1>
                <p class="list-title has-text-primary has-text-weight-normal">Things I'm learning:</p>
                <ul>
                  <li>Node.js backend</li>
                  <li>Reactive frontends (React, Vue)</li>
                  <li>API development</li>
                </ul>
                <p
                  class="list-title has-text-primary has-text-weight-normal"
                >Tools I'm trying to figure out</p>
                <ul>
                  <li>SCSS</li>
                  <li>Bulma</li>
                  <li>Figma</li>
                  <li>Webpack</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="columns is-centered">
        <div class="column is-one-fifth">
          <div class="columns fa-lg has-text-centered is-narrow">
            <div class="column">
              <a href="https://github.com/nirebu" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </div>
            <div class="column">
              <a href="https://linkedin.com/in/nicolo-rebughini" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div class="column">
              <a href="https://facebook.com/nicolo.rebughini" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
            <div class="column">
              <a href="https://instagram.com/nirebu" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="content has-text-centered">
        <p>&copy; Nicol&ograve; Rebughini</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>

</style>
