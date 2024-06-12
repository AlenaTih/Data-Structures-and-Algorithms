const array = [5, 7, 8, 4, 3, 2, 1, 9, 6, 12, 18, -5, -7, -8, -4, -3, -2, -1, -9, -6, -12, -18]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
            count += 1
        }
        
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp

    }
    return array
}

console.log(selectionSort(array))
console.log("count = ", count)

// Complexity: O(n^2) where n = the length of the array (with a coefficient of about 1/2 before n^2,
// but this coefficient is ignored when we calculate the complexity)
