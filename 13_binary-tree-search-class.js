class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        if (!this.root) {
            this.root  = new TreeNode(value)
        } else {
            let node = this.root
            let newNode = new TreeNode(value)

            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left
                }
            }
            if (value > node.value) {
                node.right = newNode // Connect the last node to the new node
            } else {
                node.left = newNode // Connect the last node to the new node
            }
        }
    }

    consoleLog(root = this.root) {
        if (!root) { // Base case that stops the recursion
            return true
        }

        console.log(root.value)
        this.consoleLog(root.left)
        this.consoleLog(root.right)
    }


}


class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null // Reference to the left node
        this.right = null // Reference to the right node
    }
}


const newTree = new BinaryTree()
newTree.add(4)
newTree.add(8)
newTree.add(12)
newTree.add(2)
newTree.add(6)
newTree.add(10)
newTree.add(14)
newTree.consoleLog()
