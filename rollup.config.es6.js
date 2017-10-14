import typescript from 'rollup-plugin-typescript2';

export default {
  entry: 'lib/index.ts',
  format: 'es',
  external: ['localforage'],
  dest: 'dist/localforage-compatibility-1-4.es6.js',
  // sourceMap: true,
  plugins: [typescript({
    include: ["lib/**/*.ts"]
  })]
};
