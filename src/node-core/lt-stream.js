const fs      = require('fs')
const assert  = require('assert')
const source  = './web.mkv'
const rs      = fs.createReadStream(source)
const ws      = fs.createWriteStream('./web-copy.mkv')
const ws1     = fs.createWriteStream('./web-copy.mkv1')
let data      = ''
let realTotal = 0
const total   = fs.statSync(source).size

var ProgressBar = require('progress')
var https       = require('https')
var bar         = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
  complete: '=',
  incomplete: ' ',
  width: 20,
  total: 10
})
let timer       = setInterval(() => {
  bar.tick()
  console.log(bar.curr)
  if (bar.complete) {
    clearInterval(timer)
  } else if (bar.curr === 5) {
    bar.interrupt('this message appears above the progress bar\ncurrent progress is ' + bar.curr + '/' + bar.total)
  }
}, 1000)
