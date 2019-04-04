<template>
  <section class="bio has-background-gradient">
    <div class="container">
      <div class="columns is-centered has-text-centered">
        <div class="column is-10-tablet">
          <h1 class="title has-text-white">About me</h1>
          <div class="is-flex is-horizontal-center">
            <figure class="image is-128x128 profile-picture">
              <img class="is-rounded" src="~assets/images/profile.jpg">
            </figure>
          </div>
          <h2
            class="subtitle is-size-5 has-text-white"
          >I'm a Linux sysadmin focusing on email deliverability, system standardisation and deployment automation.</h2>
          <h2
            class="subtitle is-size-5 has-text-white"
          >On top of that I'm learning full stack web development exploring different options available like React and Vue, with Node.js on the backend.</h2>
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
