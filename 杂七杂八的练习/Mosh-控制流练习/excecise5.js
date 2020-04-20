shownumber(100);

function shownumber(number) {
    for (let i = 0; i < number + 1; i++) {
        if (i % 2 ===0){
            console.log(i + ' "EVEN"');
            continue;
        }
        //if语句可以用三元用算符代替
        console.log(i + ' "ODD"');
    }
}

