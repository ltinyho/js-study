const net = require('net')
const server = net.connect(1235,()=>{
  server.write('11')
})


server.on('data',function (chunk) {
  console.log(chunk.toString())
})
