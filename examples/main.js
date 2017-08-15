requirejs.config({
    paths: {
        localforage: '../node_modules/localforage/dist/localforage'
    }
});
define([
  'localforage',
  '../dist/localforage-compatibility-1-4'
], function(localforage, localforageCompatibility1_4) {
  var driverPreferenceOrder = [
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE
  ];

  localforageCompatibility1_4.config().then(function() {
    localforage.config({
      driver: driverPreferenceOrder
    });
    // or
    // return localforage.setDriver(driverPreferenceOrder);
  }).then(function() {
    var key = 'STORE_KEY';
    // var value = 'What we save offline';
    var value = new Uint8Array(8);
    value[0] = 65
    // var value = undefined;
    var UNKNOWN_KEY = 'unknown_key';

    return localforage.setItem(key, value, function() {
      console.log('Saved: ' + value);

      localforage.getItem(key, function(err, readValue) {
        console.log('Read: ', readValue);
      });

      // Since this key hasn't been set yet, we'll get a null value
      localforage.getItem(UNKNOWN_KEY, function(err, readValue) {
        console.log('Result of reading ' + UNKNOWN_KEY, readValue);
        console.log('driver', localforage.driver());
      });
    });
  });
});
