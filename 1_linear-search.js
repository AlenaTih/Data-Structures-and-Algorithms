const array = [5, 7, 8, 4, 3, 2, 1, 9, 6, 12, 18]
let count = 0

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === target) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 4))
console.log("count = ", count)

// Complexity: O(n) where n = the length of the array (the worst scenario when the target is the last element
// and we have to check every element of the array)
