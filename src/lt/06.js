const http   = require('http')
let count    = 0
const server = http.createServer((req, res) => {
  res.write(`你是第${count++}`)
  res.end()
})

const PORT = 2008
server.listen(PORT, (err) => {
  if (err) throw err
  console.log(`启动web服务成功，端口为${PORT}`)
})
