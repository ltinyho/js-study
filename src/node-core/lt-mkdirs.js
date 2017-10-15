const path = require('path')
const fs = require('fs')
function mkdirs(pathname, callback) {
  
  
  pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname)
  let relativePath = path.relative(__dirname, pathname)
  console.log(relativePath)
  let folders      = relativePath.split(path.sep)
  try {
    let prefix = ''
    folders.forEach(fold => {
      const pt = path.join(__dirname, prefix, fold)
      try {
        fs.statSync(pt)
      } catch (e) {
        fs.mkdirSync(path.join(__dirname, prefix, fold))
      }
      prefix = path.join(prefix, fold)
      console.log(prefix)

    })
  } catch (e) {
    console.log(e,pathname)
  }
}

module.exports= {
  mkdirs
}