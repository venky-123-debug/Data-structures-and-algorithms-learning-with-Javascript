// FIFO
class Queue {
  constructor() {
    this.items = {}
    this.frontIndex = 0
    this.backIndex = 0
  }

  enqueue(item) {
    this.items[this.backIndex] = item
    this.backIndex++
    return item + "inserted"

    //return this.items.push(item)
  }

  dequeue() {
    let item = this.items[this.frontIndex]
    delete this.items[this.frontIndex]
    this.frontIndex++
    return item
  }

  get printQueue() {
    return this.items
  }
  peek() {
    return this.items[this.frontIndex]
  }

  isEmpty() {
    return this.items.length === 0
  }
}

const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.peek())
let str = queue.printQueue
console.log(str)
