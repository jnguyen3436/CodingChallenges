// returns prime factors of a number

function is_prime(num){
    if(num<2)
    return false;
    let counter = num - 1
    while(counter>=2){
      if(num%counter==0)
        return false
      counter--
    }
    return true
    
    }
    
    function prime_factors(num){
    let factors = []
    let counter = num -1
    while(counter>0){
      if(num%counter ==0&&is_prime(counter))
        factors.push(counter)
        counter--
    }
    return factors
    
    }
    
    prime_factors(24)