localForage-compatibility-1-4
==============================
[![npm](https://img.shields.io/npm/dm/localforage-compatibility-1-4.svg)](https://www.npmjs.com/package/localforage-compatibility-1-4)

A plugin that handles Safari compatibility issues when upgrading from LocalForage v1.4 to v1.5.

**You shouldn't need this plugin if your app never used LocalForage <= v1.4.x.**

This plugin monkey patches the `localforage.INDEXEDDB` driver `_support` check, to the one used in LF v1.4.

## Requirements

* [localForage](https://github.com/mozilla/localForage) v1.5.1+

## Installation

`npm i localforage-compatibility-1-4`

## API

Just chain a `config()` call before setting you preferred driver order or LF configuration to all localforage instances.

```js
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
  // your LF code here
});
```

PS: take a look at the `examples` folder of this repo.

# Creating instances

After the `localforageCompatibility1_4.config()` call resolves,
all subsequent `localforage.createInstance()` calls will be using the
LF v1.4 IndexedDB driver.
