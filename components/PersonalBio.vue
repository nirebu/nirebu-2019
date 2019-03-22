<template>
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
</template>

<style lang="scss" scoped>
.is-horizontal-center {
  justify-content: center;
}
.bio {
  padding: 32px 16px;
  padding-bottom: 125px;
}
.profile-picture {
  margin-bottom: 24px;
}
</style>
