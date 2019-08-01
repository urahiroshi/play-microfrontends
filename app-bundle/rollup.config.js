import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.tsx',
  output: [{
    file: 'bundle/bundle.js',
    name: 'appBundle',
    format: 'umd',
    globals: {
      react: 'React'
    }
  }],
  external: ['react', 'react-dom'],
  plugins: [
    typescript()
  ]
}