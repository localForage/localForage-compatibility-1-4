import localforage from 'localforage';
import isIndexedDBValid from './isIndexedDBValid';

function config(localforageInstance: LocalForage = localforage) {
    return localforageInstance.getDriver(localforageInstance.INDEXEDDB)
    .then((driver) => {
        driver._support = isIndexedDBValid();
        return localforageInstance.defineDriver(driver);
    });
}

export default {
    config,
    isIndexedDBValid,
};
