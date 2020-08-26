//picks prime numbers out of an array

function is_prime(num){
    if(num<2)
    return false;
    let counter = num - 1
    while(counter>2){
      if(num%counter==0)
        return false
      counter--
    }
    return true
    
    }
    
    function pick_primes(array){
      let primes = []
    array.forEach(num =>{
      if(is_prime(num))
        primes.push(num)
    
    
    })
    return primes
    
    }