declare let webkitIndexedDB: IDBFactory;
declare let mozIndexedDB: IDBFactory;
declare let OIndexedDB: IDBFactory;
declare let msIndexedDB: IDBFactory;

export function getIDB() {
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
    } catch (e) {
        return;
    }
}

// const idb = getIDB();
// export default idb;
