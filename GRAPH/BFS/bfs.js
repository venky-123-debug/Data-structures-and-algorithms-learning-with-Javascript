const bfs = (graph, startNode) => {
  const visited = new Set() // Keep track of visited nodes
  const queue = [startNode] // Initialize queue with the start node
  visited.add(startNode) // Mark the start node as visited
  const result = [] // Store the visited nodes in order

  while (queue.length > 0) {
    const currentNode = queue.shift() // Dequeue the first node
    result.push(currentNode) // Add the node to the result

    const neighbors = graph[currentNode] // Get neighbors of current node

    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor) // Mark neighbor as visited
          queue.push(neighbor) // Enqueue the neighbor
        }
      }
    }
  }
  return result
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
}

const startNode = "A"
const bfsResult = bfs(graph, startNode)
console.log(bfsResult) // Output: ['A', 'B', 'C', 'D', 'E', 'F']
