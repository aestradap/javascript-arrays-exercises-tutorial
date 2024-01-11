let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];

// Your code here
let sumTotal = 0;
for( const value of myArray ){
    sumTotal += value;
}
console.log (sumTotal / myArray.length);