process.stdin.setEncoding('utf8');


var q = '请输入用户名：'
var user  = {
  admin:'root',
  ltinyho:'lroot'
}
var a = Object.keys(user).includes('admin')
process.stdout.write(q)
var username = ''
process.stdin.on('data',(data)=>{
  data = data.trim()
  if(username){
    if(user[username]===data){
      process.stdout.write('登录成功\n')
      process.exit();
    }else{
      process.stdout.write(`密码错误\n请重新输入：`)
    }
  }else{
    if(Object.keys(user).includes(data)){
      process.stdout.write('请输入密码:')
      username = data
    }else{
      process.stdout.write(`${data}这个用户名不存在\n`)
      process.stdout.write(q)
    }
  }
})

