/** @description - Breadth First Search */

const bfs = (root) => {
  try {
    let curentNode = root
    let queue = []
    let result = []

    queue.push(curentNode)

    while (queue.length) {
      let current = queue.pop()
      result.push(current.val)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return result
  } catch (error) {
    console.error(error)
  }
}
