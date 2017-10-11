console.time('main')

setTimeout(() => {
  for (let i = 1; i < 1000000000; i++) {
  }
}, 0)
console.timeEnd('main')

function isevenOrOdd(number, callback) {
  if (typeof number === 'number') {
    callback(null, number)
  } else {
    callback(new Error('你传入的不是一个数字'), number)
  }
}

isevenOrOdd(20, (err, number) => {
  if (err) throw err
  console.log(number)
})
