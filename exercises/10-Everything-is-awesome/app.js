let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item) => {
            // magic goes inside these brackets
            item === 0 ? return_array.push('Yahoo') : return_array.push(1);
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));
