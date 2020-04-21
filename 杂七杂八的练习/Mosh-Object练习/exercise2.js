//用工厂模式和构造函数方式创建对象，上一个练习用的大括号的方式
function address(street,city,zipCodes) {
    return {
        street,
        city,
        zipCodes
    }
}
console.log(address(1,2,3));

function Address(street,city,zipCodes) {
    this.street = street;
    this.city= city;
    this.zipCodes = zipCodes;
}
const address2 = new Address(1,2,3);
console.log(address2);