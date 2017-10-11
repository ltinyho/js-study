// 动态显示歌词
const fs = require('fs')
const readline = require('readline');

const regex = /\[(\d{2})\:(\d{2})\.(\d{2,3})\](.+)/

fs.readFile('./lrc.lrc', 'utf8', (err, data) => {
  let lrcArr = data.split('\n')
  //[00:07.304]制作人：萧贺硕 / 黄建为
  lrcArr.forEach(lrc => {

  })
})

function printLrc(lrc,regex) {
  const p  = parseFloat
  const matches = regex.exec(lrc)
  if (matches) {
    let m     = p(matches[1])
    let s     = p(matches[2])
    let ms    = p(matches[3])
    let lyric = matches[4]
    setTimeout(() => {
      console.log(lyric)
    }, m * 60 * 1000 + s * 1000 + ms)
  } else {
    console.log(lrc)
  }
}



/*
const rl = readline.createInterface({
  input: fs.createReadStream('./lrc.lrc')
});

rl.on('line', (line) => {
});
setTimeout(()=>{
  console.log('1')
  rl.close()
},100)
rl.on('close',()=>{
  console.log('2');
})
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
  // 对答案进行处理
  console.log(`多谢你的反馈：${answer}`);

  rl.close();
});
