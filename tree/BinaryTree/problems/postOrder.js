// Structure of a Binary Tree Node
class Node {
  constructor(v) {
    this.data = v
    this.left = null
    this.right = null
  }
}

// Function to print postorder traversal
function printPostorder(node) {
  if (node == null) {
    return
  }

  // First recur on left subtree
  printPostorder(node.left)

  // Then recur on right subtree
  printPostorder(node.right)

  // Now deal with the node
  console.log(node.data + " ")
}

// Driver code
function main() {
  let root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(3)
  root.left.left = new Node(4)
  root.left.right = new Node(5)
  root.right.right = new Node(6)

  // Function call
  console.log("Postorder traversal of binary tree is: \n")
  printPostorder(root)
}

main()
