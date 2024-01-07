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

  getByValue(value) {
    let current = this.head;
    let indexCount = 0;

    while (current) {
      if (current.data === value) {
        return indexCount;
      }
      current = current.next;
      indexCount++;
    }
    return null;
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

  insertAtIndex(index, data) {
    // If the index is out of range
    if (index < 0 || index > this.size) return;

    // If the index is zero, prepend the new node to the start of the list
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    // Otherwise, use getByIndex to find the previous node
    const previous = this.getByIndex(index - 1);
    const newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    this.size++;
  }

  removeAtIndex(index) {
    // If the index is out of range
    if (index < 0 || index >= this.size) return;

    // If the index is zero, prepend the new node to the start of the list
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const previous = this.getByIndex(index - 1);
      const nodeToRemove = previous.next;
      previous.next = nodeToRemove.next;
    }

    this.size--;
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
ll.insertAtIndex(5, 5000);
ll.insertAtIndex(3, 3000);
ll.insertAtIndex(1, 1000);

// console.log("list size:", ll.getSize())
// console.log("get head:", ll.getHead())
// console.log("get by index:", ll.getByIndex(3))
// ll.toString();
// console.log("get tail:", ll.geTail())
// console.log("remove last:", ll.removeLast())
// console.log("ll contains:", ll.getByValue(9000));
ll.toString();
ll.removeAtIndex(0);
ll.removeAtIndex(1);
ll.removeAtIndex(2);
ll.toString();
