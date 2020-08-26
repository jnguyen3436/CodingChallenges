//translate array instructions to a new array

function two_d_translate(array){
    let sum = [];
  for(let i = 0; i< array.length;i++){
  
  let j = 0;
  while(j<array[i][1]){
  sum.push(array[i][0])
  j++
  }
  }
  return sum
  
  }
  
  arr_1 = [
    ['boot', 3],
    ['camp', 2],
    ['program', 5]
  ]
  two_d_translate(arr_1) //# => [ 'boot', 'boot', 'boot', 'camp', 'camp' ]