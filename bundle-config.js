//https://www.npmjs.com/package/gulp-bundle-assets
module.exports = {
    bundle: {
        customs: {
            scripts: [
                './content/js/customs/qrcode-settings.js',
                './content/js/customs/service-worker-register.js',
            ],
            options: {
                rev: false // {(boolean|string|Array)}
            }
        },
        vendors: {
            scripts: [
                './content/js/vendors/qrcode.js',
            ],
            options: {
                rev: false // {(boolean|string|Array)}
            }
        },
    },
};
