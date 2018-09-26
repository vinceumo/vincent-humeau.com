<template>
<nav>
  <div class="container">
    <MainNavigationList/>
  </div>
</nav>
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
nav {
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    li {
      display: inline-block;
      margin-right: 1rem;

      @include last(1) {
        margin-right: 0;
      }
    }
  }
}
</style>
