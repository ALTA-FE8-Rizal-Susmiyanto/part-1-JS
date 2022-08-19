// 0 1 1 2 3 5 8 13 21 34 55 89 144

function fibonacci(num) {

    if (num == 1 || num == 0) {
        return num;
    }

    console.log(num)

    return fibonacci(num - 1) + fibonacci(num - 2)
}
console.log(fibonacci(0))
console.log(fibonacci(2)) 
console.log(fibonacci(9)) 
console.log(fibonacci(10)) 
console.log(fibonacci(12)) 
