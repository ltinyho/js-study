
/**
 * User: LiuZiHao/951919064@qq.com
 * Date: 2017/5/23 7:25
 * Desc: 代理模式
 */


// 虚拟代理

var myImage = (function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);

  return {
    setSrc:function (src) {
      imgNode.src = src;
    }
  }
})()

var proxyImage =  (function () {
  var img  = new Image;
  img.onload = function () {
    myImage.setSrc(this.src);
  }
  return {
    setSrc:function (src) {
      myImage.setSrc('../../img/loading.gif');
      img.src=src;
    }
  }
})()
proxyImage.setSrc('http://pic.qiantucdn.com/images/slideshow/591d2fb88b5da.jpg')
console.log(proxyImage);
var getApi = function (id) {
  console.log('开始请求,id为：'+id);
}

var proxyGetApi = (function () {
  var cache = [],
      timer;
  return function (id) {
    if(cache.indexOf(id)==-1)cache.push(id);
    if(timer)return ;

    timer = setTimeout(function () {
      getApi(cache.join(','));
      clearTimeout(timer)
      timer = null;
      cache.length = 0;
    },2000)
  }
})()
var checkbox = document.getElementsByTagName( 'input' );
for ( var i = 0, c; c = checkbox[ i++ ]; ){
  c.onclick = function(){
    if ( this.checked === true ){
      proxyGetApi( this.id );
    }
  }
}