<template>
  <nuxt-link v-bind:to="'/'" v-bind:class="'logo'">
    <img src="~/assets/images/logo.svg" alt="vinceumo">
    {{ appName }}
  </nuxt-link>
</template>

<script>
export default {
  name: "AppLogo",
  props: {
    appName: String
  }
};
</script>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: spacer(2);
    max-width: 70px;
  }
}
</style>
