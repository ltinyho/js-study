/**
 * User: LiuZiHao/951919064@qq.com
 * Date: 2017/5/23 21:51
 * Desc: 迭代器
 */

// 内部迭代器

function each(arry, cb) {
  for ( var i = 0, l = arry.length; i < l; i++ ) {
    if( cb(arry[i], i, arry)==false)break;

  }
}

each([1, 2, 3, 4], function (val, i, arry) {
  console.log(val, i, arry);
})
var compare = function (ary1, ary2) {
  if ( ary1.length !== ary2.length ) {
    throw new Error(ary1 + '不等于' + ary2);
  }
  ary1.sort();
  ary2.sort();
  each(ary1, function (val, i) {
    if ( val !== ary2[i] ) {
      throw new Error(ary1 + '不等于' + ary2);
    }
  })
  return ary1 + '等于' + ary2;
}


var Iterator = function (obj) {
  var current = 0;
  var next = function () {
    current++;
  }
  var isDone = function () {
    return current >= ojb.length;
  }
  var getCurreItem = function () {
    return obj[current];
  }

  return {
    next:next,
    isDone:isDone,
    getCurreItem:getCurreItem
  }

}
let discussLists= [
  {
    text:'1'
  },
  {
    text:'2'
  },
  {
    text:'3'
  },
  {
    text:'4'
  }
]
var discussIterator = Iterator(discussLists);
discussIterator.next();
console.log(discussIterator.getCurreItem());