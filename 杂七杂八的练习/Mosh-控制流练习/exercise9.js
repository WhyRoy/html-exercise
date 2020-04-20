//Average = 70

//1-59:E
//60-69:D
//70-79:C
//80-89:B
//90-100:A

//每个函数一次只做一件事，这是一个设计原则

const marks = [80,80,50]
function calculateGrate() {
    const average = calculateAverage(marks);
    
    if (average < 60) console.log('E')
    else if (average<70) console.log('D')
    else if (average<80) console.log('C')
    else if (average<90) console.log('B')
    else  console.log('A')
}

function calculateAverage(arr) {
    let sum = 0;
    for (let value of arr)
        sum += value;
    return Math.floor(sum/len);
}

calculateGrate(marks);