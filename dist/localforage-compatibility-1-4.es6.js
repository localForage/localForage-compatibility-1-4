import localforage from 'localforage';

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

const idb = getIDB();
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

function config(localforageInstance = localforage) {
    return localforageInstance.getDriver(localforageInstance.INDEXEDDB)
        .then((driver) => {
        driver._support = isIndexedDBValid();
        return localforageInstance.defineDriver(driver);
    });
}
var index = {
    config,
    isIndexedDBValid,
};

export default index;
