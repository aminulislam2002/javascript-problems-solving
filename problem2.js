const ascending = [40, 100, 1, 5, 25, 10];
const descending = [40, 100, 1, 5, 25, 10];
const random = [40, 100, 1, 5, 25, 10];

// Sort an Array in Ascending Order
ascending.sort(function (a, b) {
  return a - b;
});

// Sort an Array in Descending Order
descending.sort(function (a, b) {
  return b - a;
});

// Sorting an Array in Random Order
random.sort(function () {
  return 0.5 - Math.random();
});

console.log(ascending);
console.log(descending);
console.log(random);
