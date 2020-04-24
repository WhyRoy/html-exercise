const numbers= [1,2,3,4];
function except(arr,excluded) {
    let arr1 =[];
    for (let ele of arr)
        if (!excluded.includes(ele))
            arr1.push(ele);
    return arr1;
}
except(numbers,[3,4]);