// 2 ) Implement compose function

/* compose(...functions !!manipulari cu array!!)([]) 

 output -> input ... -> next 
*/

const people = [
  { name: "John", age: 18, status: "employed" },
  { name: "Ami", age: 23, status: "employed" },
  { name: "George", age: 15, status: "unemployed" },
  { name: "Jeff", age: 20, status: "unemployed" },
  { name: "Chris", age: 26, status: "employed" },
];

const compose =
  (...fns) =>
  (z) =>
    fns.reduce((acc, fn) => fn(acc), z);

const adultAges = (arr) => arr.filter((item) => item.age >= 18);
const employStatus = (arr) => arr.filter((item) => item.status === "employed");
const mapItems = (arr) => arr.map((x) => x.name);

const applyFilters = compose(adultAges, employStatus, mapItems);
console.log(`employed people are`, applyFilters(people).join(", "));
