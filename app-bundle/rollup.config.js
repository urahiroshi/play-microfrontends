import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default {
  input: './src/render.tsx',
  output: [{
    file: 'bundle/bundle.js',
    name: 'BundleApp',
    format: 'umd',
    globals: {
      react: 'React'
    }
  }],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    nodeResolve(),
    commonJs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-dom/index.js': [
          'render'
        ],
        'node_modules/react/index.js': [
            'createElement',
        ],
      }
    }),
    typescript(),
  ]
}