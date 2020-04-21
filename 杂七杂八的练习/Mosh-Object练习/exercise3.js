//用工厂模式和构造函数方式创建对象，上一个练习用的大括号的方式


function Address(street,city,zipCodes) {
    this.street = street;
    this.city= city;
    this.zipCodes = zipCodes;
}
const address1 = new Address(1,2,3);
const address2 = new Address(1,2,3);


function areEqual(address1,address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCodes === address2.zipCodes;
}
function areSame(address1,address2) {
    /*if (address1===address2) return true;*/  //这一行太复杂了
    return address1 === address2;
}
console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));