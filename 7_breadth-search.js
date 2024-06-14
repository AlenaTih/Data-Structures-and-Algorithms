const graph = {}
graph.a = ["b", "c"]
graph.b = ["f"]
graph.c = ["d", "e"]
graph.d = ["f"]
graph.e = ["f"]
graph.f = ["g"]

// This function is an implementation of the breadth-first search algorithm.
// The breadth-first search algorithm is a way to traverse a graph and find a path from a start node to an end node.
// In this case, the graph is represented as an object where the keys are the nodes and the values are arrays of adjacent nodes.
// The algorithm works by starting at the start node, adding it to the queue, and then repeatedly doing the following:
// 1. Remove the first node from the queue.
// 2. Check if the removed node is the end node. If it is, return true.
// 3. Otherwise, add all of the adjacent nodes of the removed node to the end of the queue.
// The algorithm continues until the queue is empty or the end node is found.
function breadthSearch(graph, start, end) {
    // Create a new queue and add the start node to it.
    let queue = []
    queue.push(start)

    // While the queue is not empty...
    while(queue.length > 0) {
        // Remove the first node from the queue and assign it to the current variable.
        const current = queue.shift()

        // If the current node does not exist in the graph, add it with an empty array as its value.
        if (!graph[current]) {
            graph[current] = []
        }

        // If the end node is in the adjacency list of the current node, return true.
        if (graph[current].includes(end)) {
            return true
        } else {
            // Otherwise, add all of the adjacent nodes of the current node to the end of the queue.
            queue = [...queue, ...graph[current]]
        }
    }
}

console.log(breadthSearch(graph, a, g))



function breadthSearchClear(graph, start, end) {
    let queue = []

    queue.push(start)

    while(queue.length > 0) {
        const current = queue.shift

        if (!graph[current]) {
            graph[current] = []
        }

        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
}

console.log(breadthSearch(graph, a, g))
