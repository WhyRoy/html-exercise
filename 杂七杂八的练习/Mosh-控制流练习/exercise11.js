//输出质数
showPrimes(20);
//遍历到limit，逐个判断
function showPrimes(limit) {
    for (let i = 2; i <= limit; i++)
        isPrime(i);
    //之所以能去掉大括号是因为for循环里只有一个语句
}
//判断是不是质数
function isPrime(num) {
    let counter =0;
    for (let j = 1; j <=num ; j++) {
        let m = num % j;
        if (m ===0) counter++;
    }
    if (counter === 2) console.log(num);
}