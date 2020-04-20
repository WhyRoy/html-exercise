function origin(num){
    //let num =44;
    let result = [];
    for (let i = num; i > 0; i--) {
        let num = i;
        let circle = 0;
        let num2 = [];
        let sum = 0;
        //开始计算某一个数
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
                break;
                //return;
            }
            if (sum===1){
                break;
            }
            num = sum;
            sum = 0;

        }
        if (circle === 1){
            continue;
        }
        //console.log(num2);
        if(circle===0){
            result.push(i);
        }
    }
    console.log(result);
    console.log(num + '之内数字链末位为1的有'+result.length+'位');
    console.log('他们分别是'+result.join(','));

}
origin(111);