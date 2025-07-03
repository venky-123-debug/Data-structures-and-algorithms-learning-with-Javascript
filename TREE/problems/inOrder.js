// Binary Tree Inorder Traversal from leetcode
const inOrder = (root) => {
  let result = []

  const inorder = (node) => {
    if (node == null) return null
    inorder(node.left)
    result.push(node.val)
    inorder(node.right)
  }
  inorder(root)
  return result
}
