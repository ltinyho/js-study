// node如何充分利用单线程


const fs = require('fs')
fs.stat('./list.md',(err,stats)=>{
  if(err) throw  err

  fs.unlink('./list.md',(err)=>{
    if(err) throw err
    console.log('文件删除成功')
    fs.writeFile('./list.md',new Date(),(err,)=>{
      console.log('文件删除后创建成功')
    })
  })
})