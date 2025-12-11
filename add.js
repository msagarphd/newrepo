let prompt = require("prompt-sync")();
function add(a, b) {
  return a + b;
}
x = 10;
y = 20;
x1 = prompt("Enter number");
x2 = prompt("Enter any num");
x1 = Number(x1);
x2 = Number(x2);
//z = x + y;
console.log(add(x, y));
console.log(add(x1, x2));
