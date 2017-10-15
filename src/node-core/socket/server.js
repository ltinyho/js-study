const net    = require('net')
const fs     = require('fs')
const server = net.createServer((socket) => {
  // 'connection' listener
  console.log('client connected')
  console.log(socket.localAddress)
  console.log(socket.remoteAddress)
  fs.writeFileSync('./http.txt',socket.address().address)

  socket.on('data',(chunk)=>{
    console.log(chunk.toString())
  })
})
const port   = 1234
server.on('error',(err)=>{
  if(err){
    console.log(err)
    console.error('端口被占用')
  }
})
server.listen(port, () => {
  console.log('server bound')
  console.log(`http://localhost:${port}`)
})