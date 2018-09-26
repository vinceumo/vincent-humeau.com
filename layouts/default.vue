<template>
  <div class="page-container">
    <MainNavigation/>
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>
    <MainFooter/>
  </div>
</template>

<script>
import MainFooter from "~/components/MainFooter.vue";
import MainNavigation from "~/components/MainNavigation.vue";

export default {
  components: {
    MainFooter,
    MainNavigation
  }
};
</script>

<style lang="scss">
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1 0 auto;
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .page-container {
    height: 100vh;
    min-height: 100%;

    main {
      flex: 1 1 auto;
    }
  }
}
</style>

