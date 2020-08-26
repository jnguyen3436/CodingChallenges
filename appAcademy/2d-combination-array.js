//makes every possible unique combination given a unique array

function combinations(array){
    let pairs = [];
  for(let i =0;i<array.length;i++){
    for(let j =0; j<array.length;j++){
  
      if(array[j]>array[i])
        {
          pairs.push([array[i],array[j]])
        }
  
    }
  
  }
    return pairs
  }
  
  combinations([0, 1, 2, 3]);