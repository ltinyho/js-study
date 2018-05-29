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
module.exports = eb;


