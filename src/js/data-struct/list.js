function Node(value) {
  this.value = value;
  this.next  = null;
}

function LinkedList() {
  let length  = 0;
  let head    = null;
  this.append = function (val) {
    var node = new Node(val), current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  this.insert = function (pos, val) {
    let node = new Node(val), current = null, index = 0;
    if (pos > -1 && pos < length) {
      if (pos === 0) {
        node.next = head;
        head      = node;
      } else {
        current = head;
        while (index++ < pos) {
          current = head.next;
        }
        node.next    = current.next;
        current.next = node;
      }
      length++;
    }
  };

  this.removeAt = function (pos) {
    if (pos > -1 && pos < length) {
      if (pos === 0) {
        head = head.next;
      } else {
        let current = null, index = 0, previous = null;
        current     = head;
        while (index++ < pos) {
          previous = current;
          current  = current.next;
        }
        previous.next = current.next;
      }
      length--;
    }
  };

  this.indexOf = function (val) {
    if (length > 0) {
      let current = head, index = 0;
      while (current) {
        if (current.value === val) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    }
  };

  this.isEmpty = function (val) {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.toString = function () {
    let current = head;
    let arr     = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr.toString();
  };

  this.print = function () {
    let current = head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  };

  this.getHead = function () {
    return head;
  };
}

let myList = new LinkedList();

myList.append(2);
myList.append(2);
myList.append(88);
myList.append(4);
myList.append(42);
myList.insert(0, 77);

// myList.print();

function DoubleNode(value) {
  this.value = value;
  this.prev  = null;
  this.next  = null;
}

function DoubleLinkedList() {
  let head   = null,
      tail   = null,
      length = 0;

  this.append = function (val) {
    const node = new DoubleNode(val);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
      node.prev    = current;
      tail         = node;
    }
    length++;
    return node;

  };

  this.insert = function (pos, val) {
    const node = new DoubleNode(val);
    if (pos >= 0 && pos <= length) {
      if (pos === 0) {
        if (head === null) {
          head = node;
          tail = node;
        } else {
          head.prev = node;
          node.next = head;
          head      = node;
        }

      } else if (pos === length) {
        tail.next = node;
        node.prev = tail;
        tail      = node;
      } else {
        let current = head, previous = null, index = 0;
        while (index++ < pos) {
          previous = current;
          current  = current.next;
        }
        previous.next = node;
        node.prev     = previous;
        node.next     = current;
        current.prev  = node;
      }
      length++;
      return true;
    } else {
      return false;
    }

  };

  this.removeAt = function (pos) {

  };

  this.indexOf = function (val) {

  };

  this.print = function () {
    let current = head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  };
}

var doubleLink = new DoubleLinkedList();
doubleLink.append(4);
doubleLink.insert(1, 10);
doubleLink.print();