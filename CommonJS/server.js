// ESM -> Common JS 
// exports -> module.exports.varAmir 
// exports default -> module.exports  = { ... }
// import -> require


// const { userCheck } = require("./funcs/func01")
const func = require("./funcs/func01")


// console.log(userCheck("amir")) // false
console.log(func.num)