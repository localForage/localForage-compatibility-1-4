import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'lib/index.ts',
  format: 'umd',
  external: ['localforage'],
  dest: 'dist/localforage-compatibility-1-4.js',
  moduleName: 'localforageCompatibility1_4',
  globals: {
    localforage: 'localforage'
  },
  // sourceMap: true,
  plugins: [typescript({
    typescript: require('typescript'),
    tsconfig: false,
    "allowSyntheticDefaultImports": true,
    "module": "es2015",
    "target": "es3",
    "declaration": false,
    "noImplicitAny": true,
    "preserveConstEnums": true,
    "removeComments": true,
    "sourceMap": true,
    "strictNullChecks": true,
    "moduleResolution": "node",
    "outDir": "dist",
  })]
};
