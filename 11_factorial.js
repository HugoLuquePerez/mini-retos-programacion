function factorial(n) {
    if (n < 0) {
        throw new Error("El número debe ser un entero no negativo.");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
