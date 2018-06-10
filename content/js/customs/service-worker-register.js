if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js').then(function() {
    //console.log('Service worker registered');
    }).catch(function() {
        //console.log('Service worker registration failed');
    });
}
else {
    //console.log('Service worker not supported');
}