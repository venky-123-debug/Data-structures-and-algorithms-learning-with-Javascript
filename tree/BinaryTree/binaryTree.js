class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insertData(data) {
    let newNode = new Node(data)
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data > node.data) {
      if (node.left == null) {
        node.left = newNode.data
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode.data
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  removeData(node) {
    this.root = this.removeNode(this.root, node)
  }

  removeNode(node, key) {
    if (node == null) return null
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left == null && node.right == null) {
        node = null
        return node
      } else if (node.right == null) {
        node = node.right
        return node
      } else if (node.left == null) {
        node = node.left
      }
      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      var aux = this.findMinNode(node.right)
      node.data = aux.data

      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }

  findMinNode(node) {
    if (node.left == null) {
      return null
    } else return this.findMinNode(node.left)
  }

  getRootNode() {
    return this.root
  }
  // In-order traversal - Left -> Root -> Right
  inorder() {
    if (node != null) {
      this.inorder(node.left)
      console.log(node.data)
      this.inorder(node.right)
    }
  }
  // Pre-order traversal - Root -> Left -> Right
  preOrder() {
    if (node != null) {
      console.log(node.data)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  // Post-order traversal - left -> Right -> Root
  postOrder() {
    if (node != null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.data)
    }
  }

  search(node, data) {
    if (node == null) {
      return null
    } else if (node < data) {
      return this.search(node.left, data)
    } else if (node > data) {
      return this.search(node.right, data)
    } else return node
  }
}
let binarySearchTree = new BST()
