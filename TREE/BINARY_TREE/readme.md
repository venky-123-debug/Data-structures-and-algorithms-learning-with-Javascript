# Tree Data Structures

## Introduction

A **Tree** is a hierarchical, non-linear data structure consisting of nodes. It starts with a **root node** and branches into **subtrees** formed by child nodes connected to parent nodes. Trees are used in various domains for efficient data representation and operations.

---

## Types of Tree:

Binary Tree: Each node has at most 2 children.
Binary Search Tree (BST): Left child < parent < right child.
AVL Tree: Self-balancing BST.
Red-Black Tree: BST with balancing rules using colors.
N-ary Tree: Nodes can have up to N children.
Trie: Prefix tree for storing strings.
Heap: Complete binary tree used in priority queues.
Segment Tree: Used for range queries.
B-Trees/B+ Trees: Used in databases and file systems.

## Key Terminology

| Term        | Description                                 |
| ----------- | ------------------------------------------- |
| **Node**    | Basic unit of a tree                        |
| **Root**    | Top-most node (only one root per tree)      |
| **Child**   | A node that descends from another node      |
| **Parent**  | A node that has children                    |
| **Leaf**    | A node with no children                     |
| **Subtree** | A tree formed by a node and its descendants |
| **Edge**    | Link between parent and child               |
| **Depth**   | Length from root to a node                  |
| **Height**  | Longest path from a node to a leaf          |
| **Level**   | Depth + 1                                   |

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
