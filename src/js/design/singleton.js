// 第一版

var Singleton = function (name) {
  this.name = name;
}

Singleton.prototype.getName = function () {
  console.log(this.name);
}

Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if ( !instance ) {
      instance = new Singleton(name);
    }
    return instance;
  }

})();
/*
 var a = Singleton.getInstance('lzh');
 var b = Singleton.getInstance('zll');*/



// 第二版

var Singleton2 = (function () {
  var instance;
  var CreateDiv = function (html) {
    if ( instance ) return instance;
    this.html = html;
    this.init();
    return instance = this;
  }

  CreateDiv.prototype.init = function () {
    var div       = document.createElement("div");
    div.innerHTML = this.html;
    console.log(div);
    document.body.appendChild(div);
  }

  return CreateDiv;
})()

/*
 var a = new Singleton2('haha');
 var b = new Singleton2('hoho');*/

// 第三版 引入代理类
var CreateDiv            = (function () {
  var CreateDiv = function (html) {
    this.html = html;
    this.init();
  }

  CreateDiv.prototype.init = function () {
    var div       = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);

  }
  return CreateDiv;

})()
var ProxySingleCreateDiv = (function () {
  var instance;
  return function (html) {
    if ( !instance ) {
      instance = new CreateDiv(html);
    }
    return instance;
  }
})();
/*
 var a = new ProxySingleCreateDiv("haha");
 var b = new ProxySingleCreateDiv("hoho");
 console.log(a===b);*/

var Banner = (function () {
  var Banner                 = function (url) {
    this.url = url;
  }
  Banner.prototype.changeUrl = function (url) {
    this.url = url;
  }
  return Banner;
})()

var ProxyBanner = (function () {
  var instance;
  return function (url) {
    if ( !instance ) {
      instance = new Banner(url);
    }
    return instance;
  }
})()/*
var a           = new ProxyBanner("http://www.kaoyaya.com");
var b           = new ProxyBanner("http://www.google.com");
console.log(a);
console.log(a === b);*/

// 例子：登录框
var createLogin = (function () {
  var div;
  return function () {
    if ( !div ) {
      div = document.createElement("div");
    }
    return div;
  }
})()

// 抽象single出来
// 创建实例对象的职责和管理单例的职责分别放置在两个方法里
var Banner = (function () {
  var Banner                 = function (url) {
    this.url = url;
  }
  Banner.prototype.changeUrl = function (url) {
    this.url = url;
  }
  return Banner;
})()
var getSingle = function( fn ){
  var result;
  return function(){
    return result || ( result = fn .apply(this, arguments ) );
  }
};
var createBannerSingle = getSingle(function (url) {
  return new Banner(url);
});
var a1 = createBannerSingle("http");
var a2 = createBannerSingle("https");
console.log(a1);
console.log(a1===a2);