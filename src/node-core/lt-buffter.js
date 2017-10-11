const fs = require('fs')
/*fs.readFile('./lt-buffter.txt', (err, data) => {
  if (err) throw err
  console.log(data)
})*/

// const buf2 = Buffer.alloc(10, 1);
// const buf5 = Buffer.from('test');
// fs.writeFileSync('./md.md',buf5)

const rs = fs.createReadStream('md.md')
let data = ''
rs.on('data', function (trunk) {
  data += trunk
})
rs.on('end', function () {
})
/*fs.readFile('./logo.png',(err,buffer)=>{
  if(err)throw err
  fs.writeFile('./img.txt',buffer.toString('base64'))
})*/
const buf = Buffer.from('hello world', 'ascii')


console.log(buf.toString('base64'))
