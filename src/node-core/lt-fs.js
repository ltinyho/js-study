const fs   = require('fs')
const path = require('path')

/*
fs.appendFile('./lrc.lrc', 'data to append\n', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

fs.mkdir('haha')
fs.rename('haha','aa')
fs.watchFile('./lrc.lrc',(curr,prev)=>{
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime was: ${prev.mtime}`);
})*/

// printDir('./',0)

function printDir(target, depth) {
  const paths = fs.readdirSync(target)
  let prefix  = '|'.repeat(depth)

  let dirs  = []
  let files = []
  paths.forEach(info => {
    let stats = fs.statSync(path.join(target, info))
    if (stats.isFile()) {
      files.push(info)
    } else {
      dirs.push(info)
    }
  })

  dirs.forEach(dir => {
    console.log(`${prefix}-${dir}`)
    printDir(path.join(target, dir), ++depth)
  })

  files.forEach(file => {
    console.log(`${prefix}--${file}`)
  })
}

for (let i = 0; i < 10; i++) {
  // fs.writeFileSync(`./aa${i}.js`)
  // fs.unlinkSync(`aa${i}.js`)
}
var mkdirs = require('./lt-mkdirs').mkdirs
mkdirs('./demo/demo1/demo2')



