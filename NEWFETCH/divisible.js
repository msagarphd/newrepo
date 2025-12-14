function div(num) {
  return num % 3 == 0 && num % 5 == 0;
}
sum = 0;
for (let i = 1; i <= 200; i++) {
  if (div(i)) {
    sum += i;
    console.log(i);
  }
}
console.log("Sum of divisible numbers are", sum);
