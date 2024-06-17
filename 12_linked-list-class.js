class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value)
            this.size += 1
            return true
        }

        let node = this.root
        while (node.next) {
            node = node.next
        }

        let newNode = new Node(value)
        node.next = newNode // Connect the last node to the new node
        this.size += 1
    }

    getSize() {
        return this.size
    }

    consoleLog() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next // Move to the next node
        }

        console.log(result)
    }
}


class Node {
    constructor(value) {
        this.value = value
        this.next = null // Reference to the next node
    }
}


const newList = new LinkedList()

newList.add(4)
newList.add(5)
newList.add(7)
newList.add(10)

newList.consoleLog()
