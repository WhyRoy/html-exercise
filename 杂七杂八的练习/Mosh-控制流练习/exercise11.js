//输出质数
showPrimes(20);
//遍历到limit，逐个判断
function showPrimes(limit) {
    for (let i = 2; i <= limit; i++)
        isPrime(i);
    //之所以能去掉大括号是因为for循环里只有一个语句
}
//判断是不是质数，这个方法不好，因为计算量太大了。
/*
function isPrime(num) {
    let counter =0;
    for (let j = 1; j <=num ; j++) {
        let m = num % j;
        if (m ===0) counter++;
    }
    if (counter === 2) console.log(num);
}*/
//发现有其他数字是因子，就直接break，并打上不是质数的标签
function isPrime(num) {
    let isPrime = true;
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime){
     console.log(num);
    }
}