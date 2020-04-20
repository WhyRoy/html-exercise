let placeholder = document.querySelector('#placeholder');
let div = document.querySelector('#ul');
let pTag = document.querySelector('p');

function showPic(whichpic) {
    let source = whichpic.getAttribute('href');
    placeholder.setAttribute('src',source);
    let text = whichpic.getAttribute('title')
    pTag.innerHTML = text;
}

div.addEventListener('click',function (e) {
    let target = e.target;
    if (target.tagName.toLowerCase() === 'a'){
        e.preventDefault();
        showPic(target);
    }
});