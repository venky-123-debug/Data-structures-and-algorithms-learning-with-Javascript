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

  // To add a new element
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
        // curr = this.head
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
    if (index < 0 || index >= this.size) throw "Invalid index"

    let current = this.head
    let previous
    let i = 0

    if (index === 0) {
      this.head = current.next
    } else {
      while (i < index) {
        previous = current
        current = current.next
        i++
      }
      previous.next = current.next
    }

    this.size--
    return current.element
  }
  removeElement(element) {
    let current = this.head
    let previous = null

    while (current !== null) {
      if (current.element === element) {
        if (previous === null) {
          this.head = current.next
        } else {
          previous.next = current.next
        }
        this.size--
        return current.element
      }
      previous = current
      current = current.next
    }
    return -1
  }

  indexOf(element) {
    let current = this.head
    let index = 0

    while (current !== null) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  isEmpty() {
    return this.size === 0
  }

  sizeOfList() {
    return this.size
  }

  // traversal
  printList() {
    let current = this.head
    let result = ""
    while (current) {
      result += current.element + " -> "
      current = current.next
    }
    console.log(result + "null")
  }
}

/**
 * Node structure of a Doubly Liked List
 */
class DoublyNode {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}
