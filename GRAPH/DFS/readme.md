**Description**
This project provides implementations of the Depth-First Search (DFS) algorithm in JavaScript, supporting both recursive and iterative approaches for traversing trees and graphs. DFS is a fundamental graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses **stack** for traversal.

**Examples**
Tree traversal (pre-order, using recursive and iterative methods).
Graph traversal (handling cycles with a visited set).
Pathfinding between two nodes in a graph.

**Use Cases**
DFS is versatile and widely used in computer science for solving problems such as:

Tree Traversal: Exploring hierarchical data structures (e.g., binary trees) for tasks like searching or printing nodes.
Graph Exploration: Finding connected components in undirected graphs or strongly connected components in directed graphs.
Pathfinding: Determining a path between two nodes, useful in maze-solving or navigation problems.
Cycle Detection: Identifying cycles in graphs, crucial for algorithms like topological sorting or detecting deadlocks.
Topological Sorting: Ordering nodes in a directed acyclic graph (DAG) for dependency resolution (e.g., task scheduling).
Puzzle Solving: Exploring state spaces in problems like the N-Queens problem or Sudoku solvers.

**Advantages**
Memory Efficiency (for Deep Graphs): DFS typically uses less memory than Breadth-First Search (BFS) for deep, narrow graphs, as it explores one path at a time.
Simplicity: The recursive implementation is concise and intuitive, leveraging the call stack for backtracking.
Pathfinding: DFS can quickly find a path in a graph, especially in deep structures, without exploring all nodes.
Flexibility: Easily adaptable for different traversal orders (pre-order, in-order, post-order for trees) or graph-based problems.

**Disadvantages**
Non-Optimal Paths: DFS does not guarantee the shortest path in unweighted graphs (unlike BFS).
Stack Overflow Risk: Recursive DFS can cause stack overflow for very deep graphs, though this can be mitigated with an iterative approach.
Cycle Handling: Requires a visited set to avoid infinite loops in cyclic graphs, adding memory overhead.
Order Dependency: The order of visiting nodes depends on the implementation (recursive vs. iterative) and neighbor processing, which may affect consistency in some applications.
