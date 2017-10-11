
var path = require('path')
function resolve(p) {
  return path.resolve(__dirname,p)
}
const rootPath = resolve('../')


var m9 = $require('./09.js')
exports.rootPath = rootPath
