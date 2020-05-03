function Stopwatch() {
    let startTime, endTime, ruuning, duration = 0;

    this.start = function () {
        if (!ruuning){
            ruuning = 1;
            let date = new Date();
            startTime = date.getTime();
            console.log(startTime);
        }
        else{
            console.error('已经在运行中了');
        }
    }
    this.stop = function () {
        if (ruuning){
            ruuning=0;
            let date = new Date();
            endTime = date.getTime();
            duration += (endTime-startTime)/1000;
            console.log(duration);
        }
        else {
            console.error('已经停止了');
        }
    }
    this.reset = function () {
        startTime=0;
        endTime=0;
        ruuning=0;
        duration = 0;
    }
    Object.defineProperty(this,'duration',{
        get () {
            return duration;
        }
    })
}
