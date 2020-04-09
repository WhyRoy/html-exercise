//餐厅类
function Restaurant(obj) {
    this.cash = obj.cash;
    this.seats = obj.seats;
    this.staffs = obj.staff;
}
//招聘。staff可以是数组之类（含多个对象），里面需要有name，和id，需要按职员类的格式
Restaurant.prototype.hire = function (staff) {

        staff.id = this.staffs.length;
        this.staffs.push(staff);
        console.log('招聘'+staff.name+' id是 '+staff.id);
        //console.log(this.staffs);

};
//裁员
Restaurant.prototype.fire = function(staff){

        if (this.staffs.indexOf(staff) !== -1) {
            this.staffs.splice(this.staffs.indexOf(staff), 1);
            console.log(staff.name + " was fired! ");
        }

};

//职员类
function Staff(name,wage){
    this.id = '';
    this.name = name;
    this.wage = wage;
}
//完成一个工作
Staff.prototype.complateWork = function(){
    console.log("完成了一次工作!");
};

// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
function Waiter(name,wage){
    Staff.call(this,name,wage);
    this.foodlist = [];         //服务员对菜单的记录
}
Waiter.prototype = Object.create(Staff.prototype);
Waiter.prototype.constructor = Waiter;

//重写服务员的工作。food应该按Food的格式给，可以是数组
Waiter.prototype.complateWork = function(food){
    if(food instanceof Array){
        for(var i =0;i< food.length;i++){
            this.foodlist.push(food[i]);
        }
    }else{
        console.log("Dinner is" + food.name + "来了!");
    }
};


//厨师类
function Cook(name,wage) {
    Staff.call(this,name,wage);
}
Cook.prototype = Object.create(Staff.prototype);
Cook.prototype.constructor = Cook;

//重写厨师的工作
Cook.prototype.complateWork = function (food) {
  console.log('烹饪出 '+ food.name);
};

// 顾客类
// 方法：点菜，吃
function Customer(){
    this.foodlist =[];
}
Customer.prototype.order = function(food){
    console.log("点了" + food.name +"消费了" + food.price + "元。");
    this.foodlist.push(food.name);
};
Customer.prototype.eat = function(food){
    console.log("吃了" + food.name);
};

// 菜品类
// 属性：名字、烹饪成本、价格
function Food(name,cost,price){
    this.name = name;
    this.cost = cost;
    this.price = price;
}

//测试
var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});
console.log(ifeRestaurant.cash);
//console.log(ifeRestaurant.staffs);
console.log(ifeRestaurant.seats);

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staffs);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staffs);