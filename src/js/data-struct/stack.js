function Stack() {
  let items = []
  this.length = items.length
  this.push = function (element) {
    return items.push(element)
  }

  this.pop = function () {
    return items.pop()
  }

  this.clear = function(){
    items = []
  }
  this.size = function () {
    return items.length
  }
  this.isEmpty = function(){
    return items.length===0
  }
  this.toString = function () {
    return items.toString()
  }
  this.peek = function () {
    return items[items.length-1]
  }
}

/**
 * 10 to 2
 * @param decNum
 * @constructor
 */
function trans10To2(decNum){
  let stack = new Stack()
  while(decNum>0){
    stack.push(decNum%2)
    decNum = Math.floor(decNum/2)
  }

  let result = ''
  while(!stack.isEmpty()){
    result += stack.pop()
  }
  return result
}

console.log(trans10To2(7))
console.log(trans10To2(256))
console.log(trans10To2(Math.pow(2,10)))