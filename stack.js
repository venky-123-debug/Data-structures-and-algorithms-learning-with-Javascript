class Stack {
  constructor() {
    this.items = []
  }

  // to remove top most item in stack
  pop() {
    if (this.items.length == 0) return "UnderFlow"
    return this.items.pop()
  }

  // to add element
  push(element) {
    this.items.push(element)
  }

  // returns the top most elements in the stack,
  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length == 0
  }

  printStack() {
    let str = ""

    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ""
      return str
    }
  }
}

let stack = new Stack()
stack.push(10)
stack.push(10)
stack.push(10)

stack.push(20)
stack.pop()

stack.push(20)
console.log({ stack }, stack.peek(), typeof stack.printStack())
console.log(stack.isEmpty())
