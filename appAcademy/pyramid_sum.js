//builds pyramid using sum of nums given an array

function pyramid_sum(base){
    let pyramid = []
    pyramid.unshift(base)
    let counter = base.length
    while(counter>1){
     pyramid.unshift(build(pyramid[0])) 
     counter--
    }
   
    
   return pyramid;
  }
  pyramid_sum([3, 7, 2, 11])
  
  function build(array){
  let newarray = []
  let i = 0;
    while(i<array.length-1){
      newarray.push(array[i]+array[i+1])
      i++
    }
    return newarray
  }
  
  