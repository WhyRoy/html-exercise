function countTruthy(array) {
    let counter = 0;

    //index方法
    /*for (let i = 0,len = array.length; i < len; i++) {
        let index = falsyArr.indexOf(array[i]);
        if (index === -1){
            counter++;
        }
    }
    console.log(counter);*/

    //index的方法不如for of的方法，直接用if语句判断类真类假
    for (let value of array){
        if (value) counter++;
    }
    console.log(counter);
}
const array = [0,1,2,3];
countTruthy(array);