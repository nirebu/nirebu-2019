<template>
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
                <li>Reactive frontends with Vuejs</li>
                <li>API development</li>
              </ul>
              <p
                class="list-title has-text-primary has-text-weight-normal"
              >Tools I'm trying to figure out</p>
              <ul>
                <li>SCSS</li>
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

