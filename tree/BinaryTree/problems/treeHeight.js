class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const treeHeight = (node) => {
  if (node == null) return 0
  else {
    let lHeight = treeHeight(node.left)
    let rHeight = treeHeight(node.right)
    return Math.max(lHeight, rHeight) + 1
  }
}

let node = new Node(1)
node.left = new Node(2)
node.right = new Node(3)
node.left.left = new Node(4)
node.left.right = new Node(5)

console.log(treeHeight(node))
