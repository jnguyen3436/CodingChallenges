//checks if number is prime or not

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
    