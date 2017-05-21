// 缓存计算结果
var cacheMult = (function () {
  var cache     = {};
  // 如果在一个大函数中有一些代码块能够独立出来，我们常常把这些代码块封装在独立的小函数里面。
  var calculate = function () {
    var result = 1;
    for (let i = 0, l = arguments.length; i < l; i++) {
      result *= arguments[i];
    }
    return result;
  }
  return function () {
    var args = [].join.call(arguments, ",");
    if (args in cache) {
      console.log(1);
      return cache[args];
    }
    return cache[args] = calculate.apply(arguments);
  }
})()

// 自定义数组map函数
Array.prototype._map = function (cb) {
  var array = [];
  if (typeof cb == 'function') {
    this.forEach((val, i) => {
      array.push(cb(val, i, this));
    })
    return array;
  } else {
    throw new Error({}.toString.call(cb) + ' is not function')
  }
}
var a                = [1, 2, 3]._map((val, i, array) => {
  return val + 1;
})

// 自定义数组sort函数
Array.prototype._sort = function (cb) {
  if (typeof cb == 'function') {
    var array = [];
    this.forEach((val, i, a) => {
      if (i == this.length - 1) {
        array.push(val);
        return;
      }

      var result = cb(val, a[i + 1]);
      if (result < 0) {
        array.push(val)
      } else {
        array.push(a[i + 1]);
        this[i + 1] = val;
      }
    })
    return array;
  } else {
    throw new Error({}.toString.call(cb) + ' is not function')
  }
}

// 函数节流
var throttle = function (fn,interval) {
  var timer,
      firstTime=true,
      _self=fn;
  return function () {
    var args = arguments,
        _me = this;
    if(firstTime){
      _self.apply(_me,args);
      return firstTime=false;
    }

    if(timer)return ;

    timer = setTimeout(function () {
      clearTimeout(timer);
      timer=null;
      _self.apply(_me,args);
    },interval||500)
  }
}