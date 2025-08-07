// Binary Tree Node Definition
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// --- Tree Traversals ---

// Preorder Traversal (Recursive)
function preorderRecursive(root, result = []) {
  if (!root) return result
  result.push(root.val)
  preorderRecursive(root.left, result)
  preorderRecursive(root.right, result)
  return result
}

// Inorder Traversal (Recursive)
function inorderRecursive(root, result = []) {
  if (!root) return result
  inorderRecursive(root.left, result)
  result.push(root.val)
  inorderRecursive(root.right, result)
  return result
}

// Postorder Traversal (Recursive)
function postorderRecursive(root, result = []) {
  if (!root) return result
  postorderRecursive(root.left, result)
  postorderRecursive(root.right, result)
  result.push(root.val)
  return result
}

// Preorder Traversal (Iterative)
function preorderIterative(root) {
  if (!root) return []
  const stack = [root],
    result = []
  while (stack.length) {
    const node = stack.pop()
    result.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return result
}

// Inorder Traversal (Iterative)
function inorderIterative(root) {
  const stack = [],
    result = []
  let curr = root
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    result.push(curr.val)
    curr = curr.right
  }
  return result
}

// Postorder Traversal (Iterative)
function postorderIterative(root) {
  if (!root) return []
  const stack = [root],
    result = []
  while (stack.length) {
    const node = stack.pop()
    result.unshift(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return result
}

// Level Order Traversal (BFS)
function levelOrder(root) {
  if (!root) return []
  const queue = [root],
    result = []
  while (queue.length) {
    const levelSize = queue.length,
      level = []
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(level)
  }
  return result
}

// --- Tree Properties ---

// Height of Tree
function height(root) {
  if (!root) return 0
  return 1 + Math.max(height(root.left), height(root.right))
}

// Size (Total Number of Nodes)
function size(root) {
  if (!root) return 0
  return 1 + size(root.left) + size(root.right)
}

// Check if Tree is Balanced
function isBalanced(root) {
  function check(node) {
    if (!node) return [true, 0]
    const [leftBalanced, leftHeight] = check(node.left)
    const [rightBalanced, rightHeight] = check(node.right)
    const balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1
    return [balanced, 1 + Math.max(leftHeight, rightHeight)]
  }
  return check(root)[0]
}

// Check if Tree is BST
function isBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max)
}

// --- Tree Transformations ---

// Invert/Mirror Binary Tree
function invertTree(root) {
  if (!root) return null
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}

// Convert Sorted Array to BST
function sortedArrayToBST(nums) {
  if (!nums.length) return null
  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
}

// Binary Tree to Doubly Linked List (Inorder)
function treeToDLL(root) {
  let prev = null,
    head = null
  function convert(node) {
    if (!node) return
    convert(node.left)
    if (prev) {
      prev.right = node
      node.left = prev
    } else {
      head = node
    }
    prev = node
    convert(node.right)
  }
  convert(root)
  return head
}

// --- Advanced Problems ---

// Diameter of Binary Tree
function diameterOfBinaryTree(root) {
  let diameter = 0
  function dfs(node) {
    if (!node) return 0
    const left = dfs(node.left)
    const right = dfs(node.right)
    diameter = Math.max(diameter, left + right)
    return 1 + Math.max(left, right)
  }
  dfs(root)
  return diameter
}

// Path Sum (Check if a path with given sum exists)
function hasPathSum(root, sum) {
  if (!root) return false
  if (!root.left && !root.right) return sum === root.val
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}

// Maximum Path Sum
function maxPathSum(root) {
  let maxSum = -Infinity
  function dfs(node) {
    if (!node) return 0
    const left = Math.max(0, dfs(node.left))
    const right = Math.max(0, dfs(node.right))
    maxSum = Math.max(maxSum, node.val + left + right)
    return node.val + Math.max(left, right)
  }
  dfs(root)
  return maxSum
}

// Lowest Common Ancestor (LCA)
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  return left && right ? root : left || right
}

// Kth Smallest in BST
function kthSmallest(root, k) {
  const stack = []
  let curr = root
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    if (--k === 0) return curr.val
    curr = curr.right
  }
}

// Kth Largest in BST
function kthLargest(root, k) {
  const stack = []
  let curr = root
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.right
    }
    curr = stack.pop()
    if (--k === 0) return curr.val
    curr = curr.left
  }
}
