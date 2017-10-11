// 自己写一个require函数

function $require(id) {
  // 1、找到文件
  // 2、读取文件内容
  // 3、执行文件代码
  // 4、返回值

  const fs   = require('fs')
  const path = require('path')

  const filename = path.join(__dirname, id)
  const dirname  = path.dirname(filename)
  let code       = fs.readFileSync(filename, 'utf8')
  let module     = { exports: {}, id: filename }
  let exports    = module.exports
  code           = `
  (function($require,module,exports,__dirname,__filename){
  ${code}
  })($require,module,exports,dirname,filename)`
  eval(code)
  return module.exports
}

global.$require = $require
const m8        = $require('./08.js')
const  ltjs = require('ltjs')
module.exports = {
  m8
}
