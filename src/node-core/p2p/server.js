const net = require('net')

const server = net.createServer((socket) => {
  socket.on('data', function (chunk) {
    const data = chunk.toString().trim()
  })

})
server.on('connection', (socket) => {
  socket.pipe(process.stdout);
  socket.write('data from server');
});

const port = 1235
server.listen(1235, () => {

})

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(222)
    server.close()
    setTimeout(() => {
      server.listen(port)
    }, 1000)
  }
})