<template>
<div>
  <div v-html="createQrCode" class="qrCode-svg"></div>
</div>
  
</template>

<script>
import qrcode from "~/assets/js/qrcode.js";

export default {
  props: {
    qrData: String
  },
  computed: {
    createQrCode() {
      const qr = new qrcode(0, "H");
      qr.addData(this.qrData);
      qr.make();
      return qr.createSvgTag({
        cellColor: () => "hsl(0, 0%, 13%)"
      });
    }
  }
};
</script>
