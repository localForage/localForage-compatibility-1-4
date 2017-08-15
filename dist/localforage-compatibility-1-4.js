(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('localforage')) :
	typeof define === 'function' && define.amd ? define(['localforage'], factory) :
	(global.localforageCompatibility1_4 = factory(global.localforage));
}(this, (function (localforage) { 'use strict';

localforage = localforage && localforage.hasOwnProperty('default') ? localforage['default'] : localforage;

function getIDB() {
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    }
    catch (e) {
        return;
    }
}

var idb = getIDB();
function isIndexedDBValid() {
    try {
        if (!idb) {
            return false;
        }
        if (typeof openDatabase !== 'undefined' && typeof navigator !== 'undefined' &&
            navigator.userAgent &&
            /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
            return false;
        }
        return idb &&
            typeof idb.open === 'function' &&
            typeof IDBKeyRange !== 'undefined';
    }
    catch (e) {
        return false;
    }
}

function config(localforageInstance) {
    if (localforageInstance === void 0) { localforageInstance = localforage; }
    return localforageInstance.getDriver(localforageInstance.INDEXEDDB)
        .then(function (driver) {
        driver._support = isIndexedDBValid();
        return localforageInstance.defineDriver(driver);
    });
}
var index = {
    config,
    isIndexedDBValid
};

return index;

})));
