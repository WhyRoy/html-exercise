var w = 550,
    h = 350,
    axisX = 500,
    axisY = 300,            //注意高度是从顶部往下的，y轴是特别要注意的
    startX = 25,
    startY = 325;
var r = 5,
    lColor ="#37A2DA";


function getBar(data) {
    // 定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
console.log("执行了getBar");
// 定义好每一个柱子的宽度及柱子的间隔宽度
    var barWidth = 32,
        interval = 9;
// 定义好柱子颜色，轴的颜色
    var barColor = "#0DAFF4",
        axisColor = "rgb(0,99,99)";
// 拿到柱状图中的最大值Max，也可用下面的排序的方式得到最大值
    var max = Math.max.apply(Math,data);
    console.log(max);
    /*var max = data[0];
    for (var i in data) {
        if (data[i] > max) {
            max = data[i];
        }
    }*/
    //用排序的方式得到数组的最大值，,但这样使得data的顺序被改变了
    /*data.sort(function (a,b) {
        return a-b;
    });
    var max = data[data.length-1];*/

    // 根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var percent = 1;

    var svgStart = '<svg width=' + w + ' height=' + h + ' version="1.1" xmlns="http://www.w3.org/2000/svg">';
    var svgEnd = '</svg>';
    // 绘制横轴及纵轴
    var row = "<line x1=" + startX + " y1=" + startY + " x2=" + (startX + axisX) + " y2=" + startY + ' style="stroke:rgb(0,99,99);stroke-width:1"/>';
    var col = "<line x1=" + startX + " y1=" + startY + " x2=" + startX + " y2=" + (startY - axisY) + ' style="stroke:rgb(0,99,99);stroke-width:1"/>';
    // 遍历数据，计算将要绘制柱子的高度和位置，绘制每一个柱子
    var svgT = svgStart + row + col;

    for (var i = 0; i < data.length; i++) {

        var rectStartX = startX + interval * (i + 1) + barWidth * i;
        var rectStartY = startY - data[i];

        var bar = "<rect x=" + rectStartX + " y=" + rectStartY + " width=" + barWidth + " height=" + data[i] + ' style="fill:#0DAFF4;stroke-width:1;stroke:rgb(0,0,0)"/>';
        svgT += bar;
    }
    svgT += svgEnd;

    return svgT;
}
function getLine(data) {

    // 拿到柱状图中的最大值Max，也可用下面的排序的方式得到最大值
    var max = Math.max.apply(Math,data);
    console.log(max);
    /*var max = data[0];
    for (var i in data) {
        if (data[i] > max) {
            max = data[i];
        }
    }*/

    var interval =40;

    var drawing = document.querySelector('canvas');
    drawing.setAttribute('width',w);
    drawing.setAttribute('height',h);
    if (drawing.getContext){
        var ctx = drawing.getContext('2d');
        ctx.beginPath();
        ctx.translate(startX,startY);
        ctx.moveTo(0,0);
        ctx.lineTo(axisX,0);
        ctx.moveTo(0,0);
        ctx.lineTo(0,-axisY);
        ctx.stroke();

        //遍历数据
        ctx.moveTo(15,-data[0]);
        for (var i = 0; i < data.length; i++) {
            var x = 15+ interval *i;
            var y = -data[i];
            ctx.lineTo(x,y);
            ctx.arc(x,y,r/2,0,Math.PI*2,false);
            ctx.strokeStyle= lColor;
            ctx.stroke()
        }
    }
}