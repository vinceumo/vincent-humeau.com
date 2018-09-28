<template>
<header>
  <div class="container">
    <AppLogo v-bind:appName="'Vincent Humeau'"/>
    <nav>
      <MainNavigationList/>
    </nav>
  </div>
</header>
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
header > .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: spacer(3);
  padding-bottom: spacer(3);

  nav {
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      justify-content: flex-end;
      margin: 0;

      li {
        display: inline-block;
        margin-right: 1rem;

        @include last(1) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
