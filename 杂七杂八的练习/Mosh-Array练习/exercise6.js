const numbers = [1,2,3,4];
const max = getMax([]);
function getMax(array) {
    if (array.length!==0)
        return Math.max(...array);
    return undefined;
}
console.log(max);