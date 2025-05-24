class Graph {
  constructor() {
    this.adjucencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjucencyList[vertex]) {
      this.adjucencyList[vertex] = []
      return true
    } else return false
  }

  // add edge
  addEdge(vertex1, vertex2) {
    if (this.adjucencyList[vertex1] && this.adjucencyList[vertex2]) {
      this.adjucencyList[vertex1].push(vertex2)
      this.adjucencyList[vertex2].push(vertex1)
      return true
    } else return false
  }

  // remove edge
  removeEdge(vertex1, vertex2) {
    if (this.adjucencyList[vertex1] && this.adjucencyList[vertex2]) {
      this.adjucencyList[vertex1] = this.adjucencyList[vertex1].filter((v) => v !== vertex2)
      this.adjucencyList[vertex2] = this.adjucencyList[vertex2].filter((v) => v !== vertex1)
      return true
    } else return false
  }

  //remove  vetrex
  removeVertex(vertex) {
    if (!this.adjucencyList[vertex]) return undefined
    while (this.adjucencyList[vertex].length) {
      let temp = this.adjucencyList[vertex].pop()
      this.removeEdge(vertex, temp)
    }
    delete this.adjucencyList[vertex]
  }
}

let g = new Graph()
g.addVertex("a")
g.addVertex("b")
g.addEdge("a", "b")

console.log({ g })
