//sum
function sum(...arr) {
    if (arr.length===1&&Array.isArray(arr[0]))
      arr = [...arr[0]];
    return arr.reduce((a,b) => a+b);
}
console.log(sum(1,2,3));