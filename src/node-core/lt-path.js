const path = require('path')
const p01  = '../lt/01.js'
// console.log(path.basename('p01',''))
// console.log(process.env.PATH.split(path.delimiter))
// console.log(path.dirname('p01'))
// console.log(path.parse(p01))
// console.log(path.format(path.parse(p01)))
// console.log(path.isAbsolute(p01))

// console.log(path.join('../','/lt/..','/01.js'))

// console.log(path.relative('../','/home/ltinyho'))

console.log(path.resolve('../../../', 'home/ltinyho', 'work', 'web', 'kaoyayacn'))
const p = {
  p: null
}
p.p     = p
console.log(p.p === p.p.p)

path.dirname('')