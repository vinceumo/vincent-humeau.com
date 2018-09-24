<template>
<nav>
  <MainNavigationList/>
</nav>
</template>

<script>
import MainNavigationList from "~/components/MainNavigationList.vue";

export default {
  name: "MainNavigation",
  components: {
    MainNavigationList
  }
}
</script>