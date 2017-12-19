function Queue() {
  let items    = [];
  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue  = function () {
    return items.shift();
  };
  this.front    = function () {
    return items[0];
  };
  this.isEmpty  = function () {
    return items.length === 0;
  };
  this.size     = function () {
    return items.length;
  };
  this.toString = function () {
    return items.toString();
  };
  this.print    = function () {
    console.log(items);
  };
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(10);
queue.enqueue(13);
queue.dequeue();
queue.print();

function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element  = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    let queue = new QueueElement(element, priority);
    if (this.isEmpty()) {
      items.push(queue);
    } else {
      let added = false;
      for (let i = 0; i < items.length; i++) {
        if (queue.priority > items[i].priority) {
          items.splice(i, 0, queue);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(queue);
      }
    }
  };

  this.dequeue  = function () {
    return items.shift();
  };
  this.isEmpty  = function () {
    return items.length === 0;
  };
  this.size     = function () {
    return items.length;
  };
  this.toString = function () {
    return items.toString();
  };
  this.print    = function () {
    console.log(items);
  };
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue('lzh', 3);
priorityQueue.enqueue('zzl', 2);
priorityQueue.enqueue('sql', 2);
priorityQueue.enqueue('jpr', 3);
priorityQueue.enqueue('aa', 3);
priorityQueue.enqueue('aga1s', 2);
priorityQueue.enqueue('aga1s', 4);
priorityQueue.enqueue('ag5as', 1);
priorityQueue.enqueue('aga4s', 5);
priorityQueue.enqueue('ag3as', 5);
priorityQueue.print();

function hotPotato(nameList, num) {
  var queue = new Queue();
  nameList.forEach(function (item) {
    queue.enqueue(item);
  });
  let out = '';
  while (queue.size()>1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    out = queue.dequeue();
    console.log(`${out}被淘汰了`);
  }
  return queue.dequeue()
}

const nameList = [
  'lzh',
  'sql',
  'zzl',
  'jpl',
  'lzh1',
  'sql1',
  'zzl1',
  'jpl1'
];
const winner = hotPotato(nameList,10)
console.log('winner '+winner)