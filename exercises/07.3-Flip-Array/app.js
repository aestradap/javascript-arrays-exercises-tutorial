let arr = [45,67,87,23,5,32,60];

// Your code here
let myfinalArr = [];
for(const i in arr){
    myfinalArr.unshift(arr[i]);
}
console.log(myfinalArr);