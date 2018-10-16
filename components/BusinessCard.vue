<template>
  <div class="business-card">
    <QrCodeGenerator class="qr-code" v-bind:qrData="vCardData"/>
    <a v-bind:href="vCardToDataUri" download='vincent-humeau.vcf'>Download VCard</a>
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
  .qr-code {
    max-width: 200px;
    margin-bottom: spacer(2);
  }
}
</style>
