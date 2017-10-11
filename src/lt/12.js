
let last
setInterval(() => {

/*  Object.keys(require.cache).forEach((key => {
    delete require.cache[key]
  }))*/

  const date = require('./11')
  console.log(last === date)
  last = date
  
}, 1000)