//checks which element is first in array

function first_in_array(array,element1,element2){
    if(array.indexOf(element1)<array.indexOf(element2))
      return element1
    else
      return element2
    }
    first_in_array(["a", "b", "c", "d"], "d", "b");