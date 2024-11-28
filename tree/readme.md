# Tree Data Structures

## Introduction

A **Tree** is a hierarchical, non-linear data structure consisting of nodes. It starts with a **root node** and branches into **subtrees** formed by child nodes connected to parent nodes. Trees are used in various domains for efficient data representation and operations.

---

## Key Terminology

- **Root**: The topmost node in a tree.
- **Node**: An individual element of the tree.
- **Parent**: A node that has one or more children.
- **Child**: A node descended from a parent node.
- **Leaf**: A node with no children.
- **Subtree**: A section of a tree comprising a node and its descendants.
- **Depth**: Distance from the root node to a given node.
- **Height**: The number of edges on the longest path from a node to a leaf.

---

## Applications

1. **Databases & File Systems**

   - B-Trees and B+ Trees are used to index large databases.
   - File systems use tree structures to represent directories and files.

2. **Search & Sorting**

   - Binary Search Trees (BST) allow efficient search, insert, and delete operations.
   - Heaps are used in algorithms like heap sort and priority queues.

3. **Network Routing**

   - Trees are used to represent routing paths and hierarchical IP structures.

4. **Artificial Intelligence**

   - Decision trees are used in AI for decision-making processes and machine learning.

5. **Compilers**
   - Abstract Syntax Trees (AST) are used to represent the structure of source code.

## Advantages

- **Efficient Operations**: Fast lookups, insertions, and deletions (especially in BSTs).
- **Hierarchical Representation**: Ideal for representing hierarchical relationships like file systems or organizational charts.
- **Dynamic Memory**: Trees use dynamic memory allocation and adjust to variable data sizes.

## Disadvantages

- **Complex Implementation**: More complex to implement and manage than linear data structures.
- **Unbalanced Trees**: Can degrade performance to O(n) in worst-case scenarios if not balanced.
- **Extra Memory**: Requires additional memory for pointers.
