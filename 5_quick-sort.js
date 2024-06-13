const array = [5, 7, 8, 4, 3, 2, 1, 9, 6, 12, 18, -4, 0, 48, -25, 31, 33, 27]
let count = 0

function quickSort(array) { // The quick sort is a divide and conquer algorithm. It is also called Hoar's sort.
    if (array.length <= 1) { // The base case that stops the recursion
        return array
    }

    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []

    for (let i = 0; i < array.length; i++) {
        count += 1

        if (i === pivotIndex) {
            continue
        }
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log("count = ", count)

// Complexity: O(log2n * n) where n = the length of the array
