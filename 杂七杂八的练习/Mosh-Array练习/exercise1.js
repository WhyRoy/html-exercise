function arrayFromRange(min,max) {
    let arr =[];
    for ( min; min <= max ; min++)
            arr.push(min);
    return arr;
}

console.log(arrayFromRange(1,8));