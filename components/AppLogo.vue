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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1;

  img {
    max-width: 40%;
    margin-bottom: spacer(2);
  }
}
</style>
