function Set() {
  var items = {};
  this.add  = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    } else {
      return false;
    }
  };

  this.clear   = function () {
    items = {};
  };
  this.remove  = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    } else {
      return false;
    }
  };
  this.has     = function (value) {
    return items.hasOwnProperty(value);
  };
  this.size    = function () {
    return Object.keys(items).length;
  };
  this.isEmpty = function () {
    return this.size() > 0;
  };
  this.values  = function () {
    return Object.keys(items);
  };
  /**
   * 并集
   * @param otherSet
   * @returns {Set}
   */
  this.union = function (otherSet) {
    var unionSet = new Set();
    var values   = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
  /**
   * 交集
   * @param {Set} otherSet
   * @returns {Set}
   */
  this.intersection = function (otherSet) {
    var interSet = new Set();
    var values   = this.values();
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        interSet.add(values[i]);
      }
    }
    return interSet;
  };

  /**
   * 差集
   * @param {Set} otherSet
   * @returns {Set}
   */
  this.difference = function (otherSet) {
    var diffSet = new Set();
    var values  = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        diffSet.add(values[i]);
      }
    }
    return diffSet;
  };

  /**
   * 子集
   * @param {Set} otherSet
   * @returns {Boolean}
   */
  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      var values = this.values();
      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}

var mySet = new Set();
mySet.add(1);
mySet.add(4);
mySet.add(5);
console.log(mySet.values());

var otherSet = new Set();

otherSet.add(10);
otherSet.add(1);
otherSet.add(4);
otherSet.add(9);
otherSet.add(5);
console.log(otherSet.values());
console.log(mySet.union(otherSet).values());
console.log(mySet.intersection(otherSet).values());
console.log(mySet.difference(otherSet).values());
console.log(mySet.subset(otherSet));