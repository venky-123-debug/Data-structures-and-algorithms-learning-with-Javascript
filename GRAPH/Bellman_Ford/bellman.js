class Edge {
  constructor(src, dest, weight) {
    this.src = src
    this.dest = dest
    this.weight = weight
  }
}

function bellmanFord(vertices, edges, source) {
  // Initialize distances with infinity, and the source's distance as 0
  let dist = Array(vertices).fill(Infinity)
  dist[source] = 0

  // Relax edges |V|-1 times
  for (let i = 0; i < vertices - 1; i++) {
    for (let edge of edges) {
      if (dist[edge.src] + edge.weight < dist[edge.dest]) {
        dist[edge.dest] = dist[edge.src] + edge.weight
      }
    }
  }

  // Check for negative-weight cycles
  for (let edge of edges) {
    if (dist[edge.src] + edge.weight < dist[edge.dest]) {
      throw new Error("Graph contains a negative-weight cycle")
    }
  }

  return dist
}
