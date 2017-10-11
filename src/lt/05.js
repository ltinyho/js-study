// 事件模型
var utils = require('util')
var em    = require('events').EventEmitter

var ltjs = function () {

}

utils.inherits(ltjs, em)

var lt =  new ltjs()
lt.once('haha',function (a,b) {
  console.log(a,b)
})
lt.on('aaa',function (a) {
  console.log(a)
})

process.stdin.on('data',(data)=>{
  lt.emit('haha',data.toString(),2)
  lt.emit('aaa',3333)
})