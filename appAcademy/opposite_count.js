//checks for opposite pairs

function opposite_count(array){
    let count = 0;
  for(let i =0;i<array.length;i++){
    for(let j =0; j<array.length;j++){
  
      if(array[j]+array[i]==0&&j>i)
        {
          count++
        }
  
    }
  
  }
    return count
  }
  
  opposite_count([ 2, 5, 11, -5, -2, 7 ])