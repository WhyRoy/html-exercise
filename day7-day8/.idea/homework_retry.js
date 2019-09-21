window.onload =function f() {
    var timer = null,
        index = 0,
        pics = document.getElementsByClassName("banner-slide");
    lis = document.getElementById("belly1-content").getElementsByTagName("li");
    span = document.getElementById("belly1").getElementsByTagName("span");


//封装一个代替getElementById()的方法
    function byId(id){
        return typeof(id) === "string"?document.getElementById(id):id;
    }


//开始播放轮播图
    function startAutoPlay(){
        timer = setInterval(function(){
            index++;
            if(index>3){
                index = 0;
            }
            changeImg();
        },3000);
    }
//暂停播放
    function stopAutoPlay(){
        if (timer) {
            clearInterval(timer);
        }
    }
//改变轮播图
    function changeImg(){
        for(var i=0;i<pics.length;i++){
            pics[i].style.display = "none";
            lis[i].className = "";
        }
        pics[index].style.display = "block";
        lis[index].className = "changeColor";
    }
    function slideImg() {
        var belly = byId("belly1");
        var banner = byId("banner");
        belly.addEventListener("mouseover",stopAutoPlay());
        belly.addEventListener("mouseout",startAutoPlay());
        /*main.onmouseover = function(){
            stopAutoPlay();
        };*/
        /*main.onmouseout = function(){
            startAutoPlay();
        };*/
        /*main.onmouseout();*/

        //点击导航栏切换图片
        for(var i=0;i<pics.length;i++){
            lis[i].id = i;
            //给每个li项绑定点击事件
             function click(){
                             //获取当前li项的index值
                 index = this.id;
                 changeImg();
             }
            lis[i].addEventListener("click", click);
        }
    }
    slideImg();
    /*
    startAutoPlay();*/
    document.querySelector("#second").onclick = function(){
        document.querySelector("#second2").scrollIntoView(true);
    }
    document.querySelector("#third").onclick = function(){
        document.querySelector("#third3").scrollIntoView(true);
    }
    document.querySelector("#fourth").onclick = function(){
        document.querySelector("#fourth4").scrollIntoView(true);
    }
    document.querySelector("#fifth").onclick = function(){
        document.querySelector(".fourth").scrollIntoView(true);
    }
}