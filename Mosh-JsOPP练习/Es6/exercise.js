const _arr = new WeakMap();
class Stack {
  constructor(count) {
    _arr.set(this, []);
  }
  peek() {
    const item = _arr.get(this);
    if (item.length === 0) console.error("stack is empty");
    return item[item.length - 1];
  }
  pop() {
    //可以先把这个复杂的变量赋给一个常量
    if (_arr.get(this).length === 0) console.error("stack is empty");
    return _arr.get(this).pop();
  }
  push(value) {
    _arr.get(this).push(value);
  }
  get count() {
    return _arr.get(this).length;
  }
}
const s = new Stack();
console.log(s);
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek());
