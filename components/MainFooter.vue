<template>
  <footer class="has-bg-dark has-py-4 has-mt-4">
    <div class="container">
      <section>
        <h2>Navigation</h2>
        <MainNavigationList/>
      </section>
      <section>
        <h2>Where to find me</h2>
        <ul>
          <li><a href="https://github.com/vinceumo">Github</a></li>
          <li><a href="https://codepen.io/vinceumo">Codepen</a></li>
          <li><a href="https://www.linkedin.com/in/vincent-humeau/">Linkedin</a></li>
          <li><a href="https://twitter.com/vince_umo">Twitter</a></li>
          <li><a href="https://www.instagram.com/vince_umo/">Instagram</a></li>
          <li><a href="https://vinceumo.github.io/devNotes/">devNotes</a></li>
        </ul>
      </section>
      <section>
        <h2>Add me to our contacts</h2>
        <QrCodeGenerator v-bind:qrData="qrDataToDisplay"/>
      </section>
    </div>
  </footer>
</template>

<script>
import MainNavigationList from "~/components/MainNavigationList.vue";
import QrCodeGenerator from "~/components/QrCodeGenerator.vue";

export default {
  name: "MainFooter",
  components: {
    MainNavigationList,
    QrCodeGenerator
  },
  data() {
    return {
      qrDataToDisplay: `BEGIN:VCARD
VERSION:4.0
N:Humeau;Vincent;;Mr.;
FN:Vincent Humeau
ORG:Dam Digital
TITLE:Lead Front End Developer
EMAIL:hello@vincent-humeau.com
URL:http://www.vincent-humeau.com
END:VCARD`
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  > .container {
    display: grid;
    grid-gap: spacer(3);

    @include min(bp(sm)) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  ul {
    margin-top: 0;
  }
}
</style>
