let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let myFinalMix = [];
for(const i in mix){
    myFinalMix.push(typeof mix[i]);
}
console.log(myFinalMix);