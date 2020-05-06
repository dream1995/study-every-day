/**
 * 模块化 （解耦，项目工程化）
 * 1. 文件依赖
 * 2. 命名冲突
 **/

/**
 *
 * CommonJs
 *  Node 环境
 *  每个文件都是一个模块，拥有自己的作用域。同步加载
 **/
// let {name} = require('./common-js/commonjs-dome')

/**
 *
 * ES6
 *  export 输出
 *  importDome 输入
 **/
import name from './importDome/index.mjs'

console.log(name)