<template>
<header>
  <div class="container">
    <nuxt-link v-bind:to="'/'" v-bind:class="'logo'">Vincent Humeau</nuxt-link>
    <nav>
      <MainNavigationList/>
    </nav>
  </div>
</header>
</template>

<script>
import MainNavigationList from "~/components/MainNavigationList.vue";

export default {
  name: "MainNavigation",
  components: {
    MainNavigationList
  }
};
</script>

<style lang="scss">
header > .container {
  display: flex;
  justify-content: space-between;
  padding-top: spacer(3);
  padding-bottom: spacer(3);

  .logo {
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
  }

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
