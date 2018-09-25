<template>
  <ul>
    <li
      v-for="(item, index) in navItems"
      v-bind:key="item.name + index">
      <nuxt-link v-bind:to="item.path">{{item.name}}</nuxt-link>
      </li>
  </ul>
</template>

<script>
export default {
  name: "MainNavigationList",
  data() {
    return {
      navItems: [
        { name: "Home Page", path: "/" },
        { name: "Article", path: "/Articles" },
        { name: "Projects", path: "/Projects" }
      ]
    };
  }
};
</script>