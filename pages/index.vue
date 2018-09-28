<template>
  <section class="container">
    <h1>Hello world</h1>
    <div class="home-content">
      <img class="img-fluid" src="~/assets/images/portrait.jpg" alt="vinceumo">
      <p>
        My name is Vince, I'm lead Front End Developer at <a href="https://www.damdigital.com/">Dam Digital</a>, London, UK.
      </p>
      <p>
        I have been playing with web development since 2006 and since the last 2 years professionally.
      </p>
      <p>
        I specialize in front-end development (HTML5, CSS3, Javascript). My focus is to deliver accessible and scalable web applications.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.home-content {
  img {
    @include min(bp(md)) {
      float: right;
      margin-left: spacer(3);
    }
  }
}
</style>
