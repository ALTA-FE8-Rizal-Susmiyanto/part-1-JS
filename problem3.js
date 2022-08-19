function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


function primaSegiEmpat(wide, high, start) {
    const arr = []
    const area = wide * high
    let i = start + 1;

    while (true) {
        const isPrime = checkPrime(i)
        if (isPrime) {
            arr.push(i)
        }
        if (arr.length == area) {
            break
        }
        i++;
    }

    let str = "";
    for (let i = 0; i < high; i++) {
        for (let j = 0; j < wide; j++) {
            const pos = i * wide + j;
            str += `${arr[pos]}`;

            if (j != wide - 1) {
                str += " "
            }
        }
        str += "\n";
    }
    
    const sum = arr.reduce((a,b) => a+b,0);
    str += sum;

    return str;
}
console.log(primaSegiEmpat(2, 3, 13))
/*
17 19
23 29
31 37
156
*/

console.log(primaSegiEmpat(5, 2, 1))
/*
2 3 5 7 11
13 17 19 23 29
129
*/