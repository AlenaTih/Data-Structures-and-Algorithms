// tree
// ├── 4
// │   ├── 12
// │   │   └── 10
// │   └── 8
// │       └── 5
// │           └── 1
// └── 7
//     ├── 12
//     └── 18


const tree = [
    {
        v: 4,
        c: [
            {
                v:12,
                c: [
                    {
                        v:10,
                    }
                ]
            },
            {
                v:8,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 7,
        c: [
            {
                v:12
            },
            {
                v:18
            }
        ]
    }
]

const recursiveTreeSum = (tree) => {
    let sum = 0

    tree.forEach(node => {
        sum += node.v

        if (!node.c) { // A base case that stops the recursion
            return node.v
        }
    
        sum += recursiveTreeSum(node.c)
    })

    return sum
}

console.log(recursiveTreeSum(tree))
