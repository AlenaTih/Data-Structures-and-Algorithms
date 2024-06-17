function cashFunction(fn) {
    const cash = {}

    return function(n) { // Closure
        if (cash[n]) {
            console.log("Using cash", cash[n])
            return cash[n]
        }

        let result = fn(n)
        console.log("Calculated by the function", result)
        cash[n] = result
        return result
    }
}

function factorial(n) { // Iterative approach
    let result = 1

    while (n != 1) {
        result *= n
        n -= 1
    }

    return result
}

const cashFactorial = cashFunction(factorial)

cashFactorial(9)
