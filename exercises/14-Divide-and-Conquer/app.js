let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList (numbersArray){
    let odd = [];
    let even = [];

    for(const i in numbersArray){
                if(numbersArray[i] % 2 != 0 ){
                    odd.push(numbersArray[i]);
                }else even.push(numbersArray[i]);
            }

    return odd.concat(even);
}

console.log(mergeTwoList(listOfNumbers));