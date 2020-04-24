//用一个函数实现includes的方法
function likeIncludes(arr,number) {
    for (let value of arr)
        if (value===number) return true;
    return false
}
const arr = [1,2,3,4];
console.log(likeIncludes(arr,4));