const numbers = [1,2,3,4];
const max = getMax([]);
const max2 = getMax2(numbers);
function getMax(array) {
    if (array.length!==0)
        return Math.max(...array);
    return undefined;
}
function getMax2(array){
    return array.reduce((a,c) => a>c?a:c);
}
console.log(max);
console.log(max2);