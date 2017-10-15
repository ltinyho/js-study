const net = require('net')
const fs  = require('fs')

const clients = []
//  客户端链接后全站广播
//  客户端手动发全站广播

// 总结
// 1、启动服务器net.createServer,监听1234端口
// 2、客户端连接服务器net.connect(1234)
// 3、客户端发送请求,服务端接收并发送给所有的客户端

const server = net.createServer((socket) => {
  clients.push(socket)
  // 'connection' listener
  console.log('client connected')
  fs.writeFileSync('./http.txt', socket.address().address)

  function boardcast(signal) {
    clients.forEach(client => {
      client.write(JSON.stringify(signal))
    })
  }

  socket.on('data', (chunk) => {
    // {procotol:'boardcast',from:'张三',msg:'what'}
    try {
      let signal         = JSON.parse(chunk.toString().trim())
      const { procotol } = signal
      switch (procotol) {
        case 'boardcast': {
          boardcast(signal)
        }
          break
        case 'p2p': {

        }
        case 'login': {
          boardcast(signal)
        }
          break
        default: {

        }
      }
    } catch (e) {
      console.log(e)
    }
  }).on('close',(e)=>{
    clients.splice(clients.indexOf(socket), 1);
    console.log(`${socket}下线了 当前在线${clients.length}`);
  })
})
const port   = 1234
server.on('error', (e) => {
  console.log(e)
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...')
    setTimeout(() => {
      server.close()
      server.listen(port)
    }, 1000)
  }
})
server.listen(port, () => {
  console.log('server bound')
  console.log(`http://localhost:${port}`)
})

