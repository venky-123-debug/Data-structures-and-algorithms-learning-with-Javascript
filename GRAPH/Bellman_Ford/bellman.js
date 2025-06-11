function bellmanFord(graph, vertices, source) {
  // Initialize distances and predecessors
  const distances = new Array(vertices).fill(Infinity)
  const predecessors = new Array(vertices).fill(null)
  distances[source] = 0

  // Step 1: Relax edges |V|-1 times
  for (let i = 0; i < vertices - 1; i++) {
    for (const edge of graph) {
      const { from, to, weight } = edge
      if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
        distances[to] = distances[from] + weight
        predecessors[to] = from
      }
    }
  }

  // Step 2: Check for negative weight cycles
  for (const edge of graph) {
    const { from, to, weight } = edge
    if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
      return { distances: null, predecessors: null, hasNegativeCycle: true }
    }
  }

  // Step 3: Return results
  return { distances, predecessors, hasNegativeCycle: false }
}

// Helper function to reconstruct the shortest path to a target vertex
function getShortestPath(predecessors, target) {
  const path = []
  let current = target
  while (current !== null) {
    path.push(current)
    current = predecessors[current]
  }
  return path.reverse()
}

// Example usage
const vertices = 5 // Number of vertices (0 to 4)
const graph = [
  { from: 0, to: 1, weight: 4 },
  { from: 0, to: 2, weight: 8 },
  { from: 1, to: 2, weight: 2 },
  { from: 1, to: 3, weight: 5 },
  { from: 2, to: 3, weight: 3 },
  { from: 2, to: 4, weight: 4 },
  { from: 3, to: 4, weight: 2 },
  { from: 4, to: 1, weight: -3 }, // Negative weight edge
]
const source = 0

const result = bellmanFord(graph, vertices, source)

if (result.hasNegativeCycle) {
  console.log("Graph contains a negative weight cycle")
} else {
  console.log("Distances from source:", result.distances)
  console.log("Predecessors:", result.predecessors)

  // Print shortest path to vertex 4
  const target = 4
  const path = getShortestPath(result.predecessors, target)
  console.log(`Shortest path to vertex ${target}:`, path)
}
