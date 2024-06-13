const factorial = (n) => {
    if (n === 1) { // The base case that stops the recursion
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(9))
