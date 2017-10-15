const net = require('net');
const client = net.createConnection({ port: 1234 }, () => {
  //'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});


process.stdin.on('data',(chunk)=>{
  client.write(chunk.toString().trim())
})
client.on('data', (data) => {
  console.log(data.toString());
});
client.on('end', () => {
  console.log('disconnected from server');
});