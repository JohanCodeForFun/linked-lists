class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // prepend(vaule)
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // append(vaule)
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  removeLast() /* pop */ {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let secondLast = this.head;
    while (secondLast.next.next) {
      secondLast = secondLast.next;
    }

    secondLast.next = null;
    this.size--;

    return secondLast;
  }

  getSize() {
    return this.size;
  }

  getContains(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  getHead() {
    return this.head;
  }

  geTail() {
    return this.getByIndex(this.size - 1);
  }

  getByIndex(index) {
    if (index < 0 || index > this.size) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  toString() {
    let output = "";
    let current = this.head;

    while (current) {
      output = `${output}( ${current.data} ) -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

const ll = new LinkedList();

ll.insertLast(10);
ll.insertLast(20);
ll.insertLast(30);
ll.insertLast(60);
ll.insertLast(23);
ll.insertLast(90);

ll.insertFirst(50);

// console.log("list size:", ll.getSize())
// console.log("get head:", ll.getHead())
// console.log("get by index:", ll.getByIndex(3))
// ll.toString();
// console.log("get tail:", ll.geTail())
// console.log("remove last:", ll.removeLast())
ll.toString();
console.log("ll contains:", ll.getContains(90));
