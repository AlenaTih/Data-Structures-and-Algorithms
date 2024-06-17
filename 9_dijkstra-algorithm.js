const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

/**
 * This function implements Dijkstra's algorithm to find the shortest path between a start node and an end node in a graph.
 * It takes in a graph object, a start node, and an end node as parameters.
 * The graph object is a representation of the graph, where each node is a key and its value is an object containing the nodes it is connected to and the cost of the connection.
 * The function returns an object containing the cost of each node in the shortest path from the start node to the end node.
 */
function dijkstra(graph, start, end) {
    const costs = {} // An object to store the costs of each node
    const processed = [] // An array to store the nodes that have already been processed
    let neighbors = {} // An object to store the neighbors of each node

    // Iterate over each node in the graph
    Object.keys(graph).forEach(node => {
        // If the node is not the start node, set its cost to infinity or the cost of the connection from the start node to the node
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value ? value : Infinity
        }
    })

    // Find the node with the lowest cost that has not been processed
    let node = findLowestCostNode(costs, processed)
    // While there is a node to process
    while (node) {
        // Get the cost of the current node
        const cost = costs[node]
        // Get the neighbors of the current node
        neighbors = graph[node]

        // Iterate over each neighbor of the current node
        Object.keys(neighbors).forEach(neighbor => {
            // Calculate the new cost of the neighbor by adding the cost of the connection from the current node to the neighbor
            let newCost = cost + neighbors[neighbor]

            // If the new cost is less than the cost of the neighbor, update the cost of the neighbor
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        // Add the current node to the array of processed nodes
        processed.push(node)
        // Find the node with the lowest cost that has not been processed
        node = findLowestCostNode(costs, processed)
    }
    // Return the object containing the cost of each node in the shortest path
    return costs
}

function findLowestCostNode(costs, processed) {
    let lowestCost = Infinity
    let lowestCostNode

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.incudes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestCostNode
}

console.log(dijkstra(graph, "a", "g"))




function dijkstra(graph, start, end) { // Shortest path using Dijkstra's algorithm
    const costs = {} // Costs of each node
    const processed = [] // Nodes that have already been processed
    let neighbors = {} // Neighbors of each node

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value ? value : Infinity
        }
    })

    let node = findLowestCostNode(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]

        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]

            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findLowestCostNode(costs, processed)
    }
    return costs
}

function findLowestCostNode(costs, processed) {
    let lowestCost = Infinity
    let lowestCostNode

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.incudes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestCostNode
}

console.log(dijkstra(graph, "a", "g"))
