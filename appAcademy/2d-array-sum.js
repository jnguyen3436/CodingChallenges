//sum of 2 dimensional array

function two_d_sum(array){
    let sum = 0;
  for(let i = 0; i< array.length;i++){
    for(let j = 0; j< array[i].length;j++){
    sum += array[i][j]
  }
  
  }
  return sum
  
  }
  
  array_1 = [
    [4, 5],
    [1, 3, 7, 1]
  ]
  two_d_sum(array_1)
  