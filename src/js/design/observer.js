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

function EventBus() {
  this.subs = {};
}

EventBus.prototype = {
  construct: EventBus,
  on: function (subject, callback) {
    if (!this.subs[subject]) {
      this.subs[subject] = [];
    }
    this.subs[subject].push(callback);
  },
  off: function (subject, callback) {
    if (callback === null) {
      this.subs[subject] = [];
    } else {
      this.subs[subject] = this.subs[subject].filter(cb => cb !== callback);
    }
  },
  emit: function (subject, data) {
    process.nextTick(() => {
      if (!this.subs[subject]) return false;
      this.subs[subject].forEach(cb => cb(data));
    });
  },
};

var eb = new EventBus();
eb.on('click', function () {
  console.log('click');
});

eb.emit('click');

eb.emit('haha', { name: 'lzh' });
eb.on('haha', function (data) {
  console.log(`${data.name}在笑`);
});
const cb = function (data) {
  console.log(`${data.name}在1笑`);
};
eb.on('haha', cb);
eb.off('haha', cb);