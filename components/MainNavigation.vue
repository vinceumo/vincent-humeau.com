<template>
  <section class="container">
    <header>
      <AppLogo v-bind:appName="'Vincent Humeau'"/>
      <nav id="main-navigation">
        <MainNavigationList/>
      </nav>
    </header>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import MainNavigationList from "~/components/MainNavigationList.vue";

export default {
  name: "MainNavigation",
  components: {
    AppLogo,
    MainNavigationList
  }
};
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: spacer(3);
  padding-bottom: spacer(3);
  border-bottom: 3px dashed color(dark);

  @include min(bp(sm)) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  nav {
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      margin-top: spacer(3);

      @include min(bp(sm)) {
        margin-top: 0;
        justify-content: flex-end;
      }

      li {
        display: inline-block;
        margin-right: 1rem;

        @include last(1) {
          margin-right: 0;
        }

        a {
          font-weight: bold;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
