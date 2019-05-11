<template>
  <section class="section roles">
    <div class="container is-narrow">
      <div class="box">
        <div class="content has-text-centered">
          <div class="columns is-centered">
            <div class="column role">
              <h1 class="title nirebu-title has-background-gradient">#! /SysAdmin</h1>
              <p class="list-title has-text-primary has-text-weight-normal">Things I work with:</p>
              <ul>
                <li>postfix</li>
                <li>mongoDB</li>
                <li>Docker</li>
                <li>Ansible</li>
                <li>Too many regex</li>
              </ul>
            </div>
            <div class="column role">
              <h1 class="title nirebu-title has-background-gradient">&lt;WebDev /&gt;</h1>
              <p class="list-title has-text-primary has-text-weight-normal">Things that click with me:</p>
              <ul>
                <li>Node.js backend</li>
                <li>Reactive frontends with Vuejs</li>
                <li>JAMStack</li>
                <li>Bulma CSS framework</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.roles {
  margin-top: -125px;
}

.role {
  > ul {
    list-style: inside !important;
    list-style-type: none !important;
    list-style-image: none !important;
    margin-left: 0 !important;
  }
}
</style>

