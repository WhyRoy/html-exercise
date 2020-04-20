//speed limit = 70
//5 ->1 point

function checkSpeed(speed) {
    const  speedLimit = 70;
    const kmperpoint = 5
    if (speed < speedLimit +kmperpoint){
        console.log('ok');
    }
    else {          //这个else造成了缩进，可以避免缩进。在上个if语句中加入return，就可以吧else删除了
        let point = Math.floor((speed - speedLimit) /kmperpoint);
        if (point >= 12){
            console.log('License suspended')
        }
        else if (point === 0){
            console.log('Points:'+ point);
        }
    }
}
checkSpeed(714);