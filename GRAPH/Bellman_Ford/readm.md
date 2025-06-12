**Bellman-Ford** algorithm aims to find the shortest paths from a single source vertex to all other vertices in a weighted graph. It’s versatile enough to work on both directed and undirected graphs. A notable feature is its ability to process graphs with negative weight edges, a feat that Dijkstra’s algorithm can’t achieve.

**Initialization**
Every vertex is assigned a tentative distance value. The distance for the initial vertex is set to 0, and for all others, it’s infinity. Additionally, the predecessor of each vertex is marked as undefined at the start.

**Main loop**
The algorithm will attempt to “relax” all the edges of each vertex. In graph theory, “relaxing” an edge means checking if we can get a shorter path to a vertex by going through another vertex. This loop runs `n-1` times, where `n` is the number of vertices in the graph.

**Negative-weight cycle check**
If, after the main loop, the algorithm can still relax an edge, it indicates the presence of a negative weight cycle in the graph. The implication here is that a shorter path always exists as you can keep looping through this negative cycle, making the shortest path undefined.

**Pros and Cons**
**Advantages:**

Negative Weight Handling: Unlike some algorithms, Bellman-Ford doesn’t shy away from negative weights.
Negative Cycle Detection: It can actively detect and report the presence of negative cycles.

**Disadvantages:**

Speed: For graphs devoid of negative weight edges, Bellman-Ford is notably slower than alternatives like Dijkstra’s algorithm.
Undefined Paths with Negative Cycles: If the graph has a reachable negative cycle from the source, then the algorithm can’t define a shortest path.
