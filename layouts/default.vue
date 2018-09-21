<template>
  <div>
    <MainNavigation/>
    <main>
      <nuxt/>
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
}
</script>

