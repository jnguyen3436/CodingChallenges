//function with sentence and changing it given an hash of letters to change
function sentence_change(string,object){
    let split = string.split("")
   let sentence =[] 
   split.forEach(letter=>{
      if(letter == " "){
      sentence.push(" ")
      }
      else
      if(object[letter]){
        sentence.push(object[letter])
      }
      else sentence.push("?")
      
    })
    return sentence.join(" ")
    
  }

  sentence_change("aeaeii i asklfjaslkdfjijivon alksdjfaoi4wonrow lksadnfoiw4r ",{a:"x",e:"y"})
