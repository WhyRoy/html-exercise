var num =44;
var sum = 0;
var num2 =[];
while (sum!==1){
    //计算下一个值
    while(num !== 0 ){
        let m =num % 10;
        //console.log(m);
        sum += m*m;
        //console.log(sum);
        num = Math.floor(num/10);
        //console.log(num);
    }
    //将值存入数组
    console.log(sum);
    num2.push(sum);
    //判断数组有没有重复项
    if((new Set(num2)).size !== num2.length){
        console.log("数组有重复值");
        circle =1;
        //break;
        //return;
    }
    if (sum===1){
        break;
    }
    num = sum;
    sum = 0;

}
console.log('结束');
