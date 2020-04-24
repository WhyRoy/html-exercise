const numbers = [1,2,3,4,5];
const count = countOccurrents(numbers,1);
function countOccurrents(array,searchElement) {
   /* let count = 0;
    for (let element of array)
        if (element === searchElement)
            count++;
    return count;*/
    return array.reduce((accumulator,current) => {
        const occurrence = (current === searchElement);
        return accumulator + occurrence;
    });
}
console.log(count);
