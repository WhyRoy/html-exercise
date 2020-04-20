//第几行就输出几个星星

function showStars(rows) {
    for (let i = 0; i < rows; i++) {
        let stars = ''
        for (let j = 0; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
showStars(10)