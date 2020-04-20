//显示属性值为字符串的属性
const movie ={
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director:'b'
};
showProperties(movie)
function showProperties(obj) {
    for (let key in obj){
        if (typeof obj[key] === 'string'){
            console.log(key +': ' +obj[key]);
        }
    }
}