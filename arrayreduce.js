// 3) map, filter, every, some
/*
    const map = (array,fn)=>{
        return array.reduce()
    }
    const filter = (array, fn)=>{
        return array.reduce()
    }
    const every = (array,fn)=>{
        return array.rduce()
    }
    .......
*/

const multiplyByFive = (num) => num * 5;

const arr = [1, 5, 10, 4, 6, 12];

// map with reduce

const mapReduce = (array, fn) => {
  const emptyArr = [];
  return array.reduce((acc, item) => {
    return acc.concat(fn(item));
  }, emptyArr);
};

console.log(`map with reduce`, mapReduce(arr, multiplyByFive)); //[ 5, 25, 50, 20, 30, 60 ]

// filter with reduce

const lessThanTen = (num) => {
  if (num < 10) return true;
  else return false;
};

const filterReduce = (array, fn) => {
  const emptyArr = [];
  return array.reduce((acc, item) => {
    if (fn(item)) {
      return acc.concat(item);
    }
    return acc;
  }, emptyArr);
};
console.log(`filter with reduce`, filterReduce(arr, lessThanTen)); //[ 1, 5, 4, 6 ]

// every with reduce

const isDividedBy5 = (num) => {
  if (num % 5 === 0) return true;
  else return false;
};

const everyReduce = (array, fn) => {
  return array.reduce((acc, item) => {
    return acc && fn(item);
  }, true);
};

console.log(`every with reduce`, everyReduce(arr, isDividedBy5)); // false

// some with reduce

const someReduce = (array, fn) => {
  return array.reduce((acc, item) => {
    return acc || fn(item);
  }, false);
};
console.log(`every with reduce`, someReduce(arr, isDividedBy5)); // true
