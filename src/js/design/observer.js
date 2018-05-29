/**
 *  观察者模式和发布订阅模式
 * @file: observer.js
 * @author: LiuZiHao/ltinyho@gmail.com
 * Date: 2018/5/29 下午10:03
 */

function Subject() {
  this.subs = {};
}

Subject.prototype.notify = function (subject, what) {
  if (this.subs[subject]) {
    this.subs[subject].forEach(sub => {
      sub.update(what);
    });
  } else {
    console.log(`没有 ${subject} 主题`);
  }
};

Subject.prototype.add = function (subject, watch) {
  if (!this.subs[subject]) {
    this.subs[subject] = [];
  }
  this.subs[subject].push(watch);
};

function Watcher() {
}

Watcher.prototype.update = function (what) {
  console.log(what);
};

const Sub = new Subject();
const cat = new Watcher();
const dog = new Watcher();
Sub.add('click', cat);
Sub.add('dog', dog);
Sub.notify('click', 'haha');
Sub.notify('dog', 'dog');
Sub.notify('dbggog');

