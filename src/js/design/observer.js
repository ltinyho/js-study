/**
 * User: LiuZiHao/951919064@qq.com
 * Date: 2017/5/24 21:20
 * Desc: 观察者模式
 */


document.body.addEventListener('click', function () {
})
document.body.addEventListener('click', function () {
})
var Event = (function () {
  var clientList = {},
      listen,
      trigger,
      remove;

  listen = function (key, fn) {
    if ( !clientList[key] ) {
      clientList[key] = [];
    }
    clientList[key].push(fn); // 订阅的消息添加进缓存列表
  }

  trigger = function () {
    var key = Array.prototype.shift.call(arguments), // (1);
        fns = clientList[key];
    if ( !fns || fns.length === 0 ) { // 如果没有绑定对应的消息
      return false;
    }
    for ( var i = 0, fn; fn = fns[i++]; ) {
      fn.apply(this, arguments); // (2) // arguments 是trigger 时带上的参数
    }
  }

  remove = function (key, fn) {
    var fns = clientList[key];
    if ( !fns )return false; // 如果key 对应的消息没有被人订阅，则直接返回
    if ( !fn ) {
      fns && (fns.length == 0);// 如果没有传入具体的回调函数，表示需要取消key 对应消息的所有订阅
    } else {
      for ( var l = fns.length - 1; l >= 0; l-- ) {
        if ( fns[l] === fn ) {
          fns.splice(l, 1);// 删除订阅者的回调函数
        }
      }
    }
  }

  return {
    listen:listen,
    trigger:trigger,
    remove:remove
  }
})()

Event.listen('haha',function (data) {
})
Event.trigger('haha',[1,2,3]);

