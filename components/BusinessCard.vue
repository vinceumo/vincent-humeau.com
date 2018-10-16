<template>
  <div class="business-card">
    <AppLogo v-bind:appName="'Vincent Humeau'"/>
    <QrCodeGenerator class="qr-code" v-bind:qrData="vCardData"/>
    <a class="btn is-light" v-bind:href="vCardToDataUri" download='vincent-humeau.vcf'>Download VCard</a>
  </div>
</template>


<script>
import AppLogo from "~/components/AppLogo.vue";
import QrCodeGenerator from "~/components/QrCodeGenerator.vue";

export default {
  name: "BusinessCard",
  components: {
    AppLogo,
    QrCodeGenerator
  },
  props: {
    vCardData: String
  },
  computed: {
    vCardToDataUri() {
      const vCard = this.vCardData;
      return (
        "data:," +
        encodeURIComponent(vCard)
          .replace(/['()]/g, escape)
          .replace(/\*/g, "%2A")
          .replace(/%(?:7C|60|5E)/g, unescape)
      );
    }
  }
};
</script>

<style lang="scss">
.business-card {
  background-color: color(light);
  color: color(dark);
  text-align: center;
  border-radius: 5px;
  padding: spacer(2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: color(dark);
  }

  .qr-code {
    max-width: 200px;
    margin-bottom: spacer(2);
    margin-top: spacer(2);
  }
}
</style>
