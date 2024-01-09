let arr = [4,5,734,43,45];

// Your code here, use the push() function and the 2 Math functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
arr.push(getRandomInt(734),getRandomInt(734));

console.log(arr);


