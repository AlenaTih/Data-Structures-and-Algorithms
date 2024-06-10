const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] // The array should be sorted
let count = 0

function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1
    let middle
    let found = false
    let position = -1

    while (found === fasle && start <= end) {
        count += 1

        middle = Math.floor((start + end) / 2)

        if (array[middle] === target) {
            found = true
            position = middle
            return position
        }
        if (target < array[middle]) {
            end = middle -1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(array, 4))
console.log("count = ", count)

// Complexity: O(Log2n) where n = the length of the array
