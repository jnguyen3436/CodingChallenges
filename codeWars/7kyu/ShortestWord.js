function findShort(s){
    let array = s.split(" ");
    let shortword= array[0];
    for(let i =0;i<array.length;i++){
    if(shortword.length>array[i].length)
      shortword=array[i]
    }
    return shortword.length
    }