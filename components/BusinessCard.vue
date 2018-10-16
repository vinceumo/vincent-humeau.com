<template>
  <div class="business-card">
    <div class="business-card-content">
    <QrCodeGenerator v-bind:qrData="vCardData"/>
    <a class="btn is-light" v-bind:href="vCardToDataUri" download='vincent-humeau.vcf'>Download VCard</a>
    </div>
  </div>
</template>


<script>
import QrCodeGenerator from "~/components/QrCodeGenerator.vue";

export default {
  name: "BusinessCard",
  components: {
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
  position: relative;
  display: block;
  height: 0;
  padding-bottom: (85 / 55) * 100%;
  overflow: hidden;

  .business-card-content {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    padding: spacer(2);
  }

  a {
    color: color(dark);
  }
}
</style>
