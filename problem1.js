function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true
}

function primeX(number) {
    let counter = 0;
    let i = 2;

    while (true) {
        const isPrime = checkPrime(i);
        if (isPrime) {
            counter++
        }
        if (counter == number) {
            return i;
        }
        i++
    }
}

console.log(primeX(1)) // 2
console.log(primeX(5)) // 11
console.log(primeX(8)) // 19
console.log(primeX(9)) // 23
console.log(primeX(10)) // 29
