let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
const getParkingLotState = (matrix) => {
  let notParking = 0;
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  
  for(let i = 0; i < matrix.length ; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === 0)
       notParking += 1;
        else if (matrix[i][j] === 1)
          state.occupiedSlots += 1;
        else if (matrix[i][j] === 2)
          state.availableSlots += 1;      
    }
  }
  
   state.totalSlots = matrix.length * matrix.length - notParking;
  
  return state;
}
  




console.log(getParkingLotState(parkingState));
