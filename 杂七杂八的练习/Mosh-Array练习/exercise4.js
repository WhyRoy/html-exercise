const numbers = [1,2,3,4,5];
function move(array,index,offset) {
    if (index+offset<=array.length || index+offset>=0){
        let temp = array[index+offset];
        array[index+offset] = array[index];
        array[index] = temp;
        return array;
    }
    else console.error('Invalid offset');

}
const output = move(numbers,0,0);
console.log(output);