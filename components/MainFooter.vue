<template>
  <footer class="has-bg-dark has-my-4">
    <div class="container">
      <MainNavigationList/>
      <ul>
        <li><a href="https://github.com/vinceumo">Github</a></li>
        <li><a href="https://codepen.io/vinceumo">Codepen</a></li>
        <li><a href="https://www.linkedin.com/in/vincent-humeau/">Linkedin</a></li>
        <li><a href="https://twitter.com/vince_umo">Twitter</a></li>
        <li><a href="https://www.instagram.com/vince_umo/">Instagram</a></li>
        <li><a href="https://vinceumo.github.io/devNotes/">devNotes</a></li>
      </ul>
      <img src="~/assets/images/tempQr.png" alt="Qr">
    </div>
  </footer>
</template>

<script>
import MainNavigationList from "~/components/MainNavigationList.vue";

export default {
  name: "MainFooter",
  components: {
    MainNavigationList
  }
};
</script>
