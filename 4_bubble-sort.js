const array = [4, 32, 8, 2, 9, -5, -9, 7, 25, 12, 14, -4, 0, 48]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            count += 1
        }
    }
    return array
}

console.log(bubbleSort(array))
console.log("count = ", count)

// Complexity: O(n^2) where n = the length of the array
