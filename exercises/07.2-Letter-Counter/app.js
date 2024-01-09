let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here

let myParLowerCase = par.replaceAll(' ', '').toLowerCase();
for(const i in myParLowerCase){

    if(counts.hasOwnProperty(myParLowerCase[i])){
        counts[myParLowerCase[i]] = counts[myParLowerCase[i]] + 1;
    }
    else {
        counts[myParLowerCase[i]] = 1;
    }
}

console.log(counts);
