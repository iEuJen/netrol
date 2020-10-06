import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { version } from './package.json'
import commonjs from '@rollup/plugin-commonjs'

// 版权信息
const banner = `/*!
 * netrol.js v${version}
 * © 2020-~ EuZen Chen
 * Released under the Anti 996 License
 */
`

// 获取output
function getOutput () {
  const formats = ['umd', 'esm']
  const output = formats.map((format) => ({
    file: `dist/netrol.${format === 'umd' ? 'min' : 'esm'}.js`,
    format,
    name: 'Netrol',
    banner,
    sourcemap: true
  }))
  return output
}

const isDev = process.env.ENV === 'development'

export default {
  input: './index.ts',
  output: getOutput(),
  plugins: [
    json(),
    commonjs(),
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
      runtimeHelpers: true
    }),
    !isDev && terser(),
    isDev && serve({
      open: false,
      openPage: '/examples/index.html',
      port: 8080,
      contentBase: ''
    })
  ]
}
