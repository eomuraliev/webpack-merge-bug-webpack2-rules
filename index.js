const webpackMerge = require('webpack-merge')
const util = require('util')
const baseConfig = require('./base_config')
const newConfig = require('./new_config')

console.log('base config', util.inspect(baseConfig, {showHidden: false, depth: null}))
console.log('**************')
console.log('new config', util.inspect(newConfig, {showHidden: false, depth: null}))
console.log('**************')

const mergedConfig = webpackMerge.smart(baseConfig, newConfig)
console.log('merged config', util.inspect(mergedConfig, {showHidden: false, depth: null}))
