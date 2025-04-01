**Introduction**

A Queue is a linear data structure that operates on the First In, First Out (FIFO) principle. Elements are added at one end, called the rear, and removed from the other end, called the front. Queues are widely used for tasks requiring ordered processing, scheduling, or buffering data.

**Key Terminology**

Front: The position where elements are removed (dequeued).
Rear: The position where elements are added (enqueued).
Enqueue: The operation to add an element to the rear of the queue.
Dequeue: The operation to remove and return the front element from the queue.
Peek (or Front): The operation to view the front element without removing it.
Empty Queue: A queue with no elements.
Overflow: When a queue exceeds its capacity (in fixed-size implementations).
Underflow: When an attempt is made to dequeue from an empty queue.

**Applications**

Task Scheduling: Queues are used in operating systems to manage processes or threads in a ready queue.
Print Spooling: Printers use queues to manage print jobs in the order they are received.
Breadth-First Search (BFS): Queues are employed in graph traversal algorithms like BFS to explore nodes level by level.
Buffering: Queues handle data streams, such as in network packet processing or media streaming.
Customer Service: Queues model real-world scenarios like waiting lines in call centers or ticket counters.

**Advantages**

Simplicity: Easy to implement and use for FIFO-based problems.
Efficiency: Constant time O(1) operations for enqueue and dequeue (in well-designed implementations).
Order Preservation: Maintains the sequence of elements as they are added.

**Disadvantages**

Limited Access: Only the front element can be removed, and new elements must be added at the rear.
Fixed Size (Array-based): Can lead to queue overflow if capacity is exceeded.
Not Flexible: Unsuitable for problems requiring random access or LIFO behavior.
