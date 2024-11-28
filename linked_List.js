/**
 * Linked list tutorial from Geeks for Geeks
 */

// Tocreate a new linked List
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class linkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // to add new element
  add(element) {
    let node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    this.size++
  }

  // to insert at a specified place
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      throw "Enter valid index"
    } else {
      let node = new Node(element)
      let curr, prev

      curr = this.head

      if (index == 0) {
        node.next = this.head
        this.head = node
      } else {
        curr = this.head
        let it = 0
        while (it < index) {
          it++
          prev = curr
          curr = curr.next
        }

        node.next = curr
        prev.next = node
      }

      this.size++
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      throw "Enter valid index"
    } else {
      let node = new Node(element)
      let curr,
        prev,
        it = 0
      curr = this.head
      prev = curr
    }
  }
}
