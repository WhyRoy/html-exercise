const movies =[
    { title: 'a',year :2018,rating:4.5},
    { title: 'b',year :2018,rating:4.7},
    { title: 'c',year :2018,rating:3},
    { title: 'd',year :2017,rating:4.5}
];

//All the movies in 2018 with rating > 4
//Sort them by their rating
//Pick their title

const titles = movies.filter(obj => obj.year===2018 && obj.rating>4)
    .sort((obj1,obj2)=> obj1.rating - obj2.rating)
    .map(value => value.title);
/*for (let ele of temp)
console.log(ele.title);*/
//可以用map代替上面的
console.log(titles);
