;(function () {
    document.addEventListener("DOMContentLoaded", function (event) {
        var qrCodes = document.querySelectorAll(".qrcode");

        Array.prototype.forEach.call(qrCodes, function (el, i) {
            var currentQrCode = qrCodes[i];
            var currentQrCodeText = currentQrCode.getAttribute('data-qrcode-text');
            makeCode(currentQrCode, currentQrCodeText);
        });
    });

    function makeCode(currentElement, text) {
        var newQrCode = new QRCode({
            content: text,
            padding: 4,
            width: 250,
            height: 250,
            color: "#000000",
            background: "#ffffff",
            ecl: "M"
        });
        var svg = newQrCode.svg();
        currentElement.innerHTML = svg;
    }
})();