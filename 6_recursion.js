const factorial = (n) => {
    if (n === 1) { // The base case that stops the recursion. The factorial of 1 (1!) is 1
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(9))







// Fibonachi numbers: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610

const fibonachi = (n) => {
    if (n === 1 || n === 2) { // The base case that stops the recursion. The 1st and 2nd fibonachi number is 1
        return 1
    }

    return fibonachi(n - 1) + fibonachi(n - 2)
}

console.log(fibonachi(8))
