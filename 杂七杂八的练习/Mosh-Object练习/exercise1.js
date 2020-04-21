//创建一个有三个属性的地址对象
//street
//city
//zipCode
//showAddress
const address ={
    street:1,
    city:2,
    zipCode:3
}
function showAdrress(address) {
    for (let key in address)
        console.log(key,address[key]);
}
showAdrress(address);