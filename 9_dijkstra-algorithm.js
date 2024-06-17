const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

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
        let cost = costs[node]
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
    let LowestCostNode

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.incudes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return LowestCostNode
}
