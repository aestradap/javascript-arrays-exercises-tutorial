// Your code here
const matrixBuilder = (dimension) => {
    let matrix = [];
   
    for(let i = 0; i < dimension; i++){
        let row = [];
        for(let j = 0; j < dimension; j++){
            row.push(Math.floor(Math.random() * 2) + 0);
            console.log(row);
        }
        matrix.push(row);
    }

    return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5));
