const net      = require('net')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> '
})

rl.prompt()

rl.question('what is you name?', (name) => {
  name = name.trim()
  if (!name) throw new Error('没有名字')
  rl.setPrompt(`${name}> `)
  const server = net.connect(1234, () => {
    console.log(`welcom ${name}`)
    rl.prompt()
    server.write(JSON.stringify({ procotol: 'login', from: name }))
  })

  rl.on('line', (line) => {
    let signal = { procotol: 'boardcast', from: name, msg: line.trim() }
    server.write(JSON.stringify(signal))
    rl.prompt()
  }).on('close', () => {
    console.log('再见!')
    process.exit(0)
  })

  server.on('data', (chunk) => {
    try {
      const signal = JSON.parse(chunk.toString())

      const { procotol } = signal
      switch (procotol) {
        case 'boardcast': {
          const { from:othername, msg } = signal
          if (othername !== name) {
            console.log(`${othername}>${msg}`)
            rl.prompt()
          }
        }
        break
        case 'login': {
          const { from: othername } = signal
          if (othername !== name) {
            console.log(`${othername}登录了`)
          }
        }
          break

      }
    } catch (e) {
      console.log(e)
    }
    server.on('close',function () {
      console.log(111)
    })
  })
})


