import typescript from 'rollup-plugin-typescript2';

export default {
  entry: 'lib/index.ts',
  format: 'es',
  dest: 'dist/localforage-compatibility-1-4.es6.js',
  // sourceMap: true,
  plugins: [typescript()]
};
