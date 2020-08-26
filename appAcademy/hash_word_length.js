//returns an object with a length for each word

function word_length(sentence){
    let split = sentence.split(" ")
    let lengths = {}
   
   
   
    split.forEach(word =>{
     lengths[word] = word.length
    })   
   
     return lengths
   
   }
   
   word_length("this is fun")