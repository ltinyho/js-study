function Dictionary() {
  var items   = {};
  this.has    = function (key) {
    return items.hasOwnProperty(key);
  };
  this.set    = function (key, value) {
    items[key] = value;
  };
  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    } else {
      return false;
    }
  };
  this.clear  = function () {
    items = {};
  };
  this.get    = function (key) {
    return this.has(key) ? items[key] : undefined;
  };
  this.values = function () {
    return Object.keys(items).map(key => items[key]);
  };
  this.keys   = function () {
    return Object.keys(items);
  };
}

var myDic = new Dictionary();
myDic.set('lzh', 'liuzihao');
myDic.set('zzl', 'zhouzilu');

console.log(myDic.values());
console.log(myDic.keys());
console.log(myDic.get('lzh'));