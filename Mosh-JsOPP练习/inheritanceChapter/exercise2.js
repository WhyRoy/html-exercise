//题目是一个特殊的要求,原型继承时有些特殊

function HtmlEle() {
    this.click = function () {
        console.log('click');
    }
}
HtmlEle.prototype.focus = function () {
    console.log('focus');
}
const e = new HtmlEle();
console.log(e);

function SelectHtml(...args) {
    this.items = [...args];
    this.addItem = function (item) {
        this.items.push(item);
    }
    this.removeItem = function (item) {
        let temp = this.items.indexOf(item);
        this.items.splice(temp,1);
    }
    this.render = function () {
        return `
        <select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>;
        `
    }
}
SelectHtml.prototype = new HtmlEle();
SelectHtml.prototype.constructor = SelectHtml;

function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src ="${this.src}" />`
    }
}
HtmlImageElement.prototype = new HtmlEle();
HtmlImageElement.prototype.constructor = HtmlImageElement;