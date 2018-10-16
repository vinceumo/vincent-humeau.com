<template>
  <div class="business-card">
    <QrCodeGenerator v-bind:qrData="vCardData"/>
    <a v-bind:href="'data:text/x-vcard;base64,' + vCardData">Add Me to your contacts</a>
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

  a {
    color: color(dark);
  }
}
</style>
