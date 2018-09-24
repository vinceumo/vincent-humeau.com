<template>
  <ul>
    <li
      v-for="(item, index) in items"
      v-bind:key="item.name + index">
      <nuxt-link v-bind:to="item.path">{{item.name}}</nuxt-link>
      </li>
  </ul>
</template>

<script>
export default {
  name: "MainNavigationList",
  created() {
    console.log(this.$router.options.routes);
        this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name
                , path: route.path
            })
        })
    }, data() {
        return {
            items: []
        }
    }
};
</script>