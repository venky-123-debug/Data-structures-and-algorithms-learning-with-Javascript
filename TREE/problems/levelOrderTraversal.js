class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
/**
 * @description - Level Order Traversal technique is defined as a method to traverse a Tree such that all nodes present in the same level are traversed completely before traversing the next level. */

const printLevelOrder = (node) => {
  let h = treeHeight(node)
  let i
  for (i = 1; i <= h; i++) printCurrentLevel(node, i)
}

const treeHeight = (node) => {
  if (node == null) return 0
  else {
    let lHeight = treeHeight(node.left)
    let rHeight = treeHeight(node.right)
    if (lHeight > rHeight) {
      return lHeight + 1
    } else {
      return rHeight + 1
    }
  }
}

const printCurrentLevel = (node, level) => {
  if (node == null) return
  if (level == 1) {
    console.log(node.data + "")
  } else if (level > 1) {
    printCurrentLevel(node.left, level - 1)
    printCurrentLevel(node.right, level - 1)
  }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
printLevelOrder(root)
