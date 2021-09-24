// 1 ) recursive fibonacci function
// fibonacci(6) 1 1 2 3 5 8 13 21  ==== 8
const fibonacci = function (num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(6));
