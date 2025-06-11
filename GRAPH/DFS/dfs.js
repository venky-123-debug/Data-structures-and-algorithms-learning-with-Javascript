function dfsGraphIterative(graph, start) {
  const visited = new Set()
  const stack = [start]
  while (stack.length > 0) {
    const node = stack.pop() // Remove top element like stack
    if (!visited.has(node)) {
      console.log(node) // Process current node
      visited.add(node)
      // Push neighbors in reverse to maintain similar order to recursive
      for (const neighbor of graph[node].reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor)
        }
      }
    }
  }
}

// Example usage
dfsGraphIterative(graph, "A") // Output: A, C, F, E, B, D
/**
 * @route - Recursive approach
 */
function dfsGraphRecursive(graph, start, visited = new Set()) {
  console.log(start) // Process current node
  visited.add(start) // Mark as visited
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfsGraphRecursive(graph, neighbor, visited)
    }
  }
}

// Example usage
dfsGraphRecursive(graph, "A") // Output: A, B, D, E, F, C
