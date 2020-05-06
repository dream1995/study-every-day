const name = 'Hello CommonJs';

// module.exports 可以返回指定的数据类型 String, Number, Function, Object
module.exports = name

// exports 是给module.exports 添加属性
// exports.name = name

// 同时使用两种方式
// module.exports.name = 'Module exports'
// exports.age = 12