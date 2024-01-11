let myNumbers = [23,234,345,4356234,243,43,56,2];

// Your code here
const multiplyBy3 = (number) => {
    return number * 3; 
  }

let newArray = myNumbers.map(multiplyBy3); 

console.log(newArray);
