function maxSequence(arr) {
    let maxSum = -Infinity

    // looping array yang kita definisikan
    for (let i = 0; i < arr.length; i++) {
        // Looping jumlah deret sebagai max sequence
        for (let j = i; j < arr.length; j++) {
            let totalSum = 0
            // Looping untuk menemukan deret array yang sudah ditemukan sebagai max
            for (let k = i; k < j; k++) {
                // Variabel untuk menjumlahkan deret
                totalSum += arr[k]
            }
            if (totalSum > maxSum) {
                maxSum = totalSum
            }
        }
    }
    return maxSum
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSequence([-2,-5,6,-2,-3,1,5,-6])) // 7
console.log(maxSequence([-2,-3,4,-1,-2,1,5,-3])) // 7
console.log(maxSequence([-2,-5,6,-2,-3,1,6,-6])) // 8
console.log(maxSequence([-2,-5,6,2,-3,1,6,-6])) // 12