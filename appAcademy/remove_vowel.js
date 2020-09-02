//function that either removes first or last vowel in a sentence


//want seperate array that removes the number we're using as the finding_multiple
//changes each time we move thru number
//need for loop

//replace first vowel or last vowel

function remove_vowel(string){
    let words = string.split(" ")
    let firstVowel = true;
    let newSentence = []
    words.forEach(word=>{
      if(firstVowel){
        firstVowel = false;
        newSentence.push(firstFunction(word)) 
        
      }
      else
        {
         newSentence.push(secondFunction(word)) 
          firstVowel = true;
        }
        
      
    })
        
    console.log("newSentence",newSentence)
    return newSentence.join(" ")
     
    
    
    
    }
    function firstFunction(word){
      let vowels = "aeiou"
      let array = word.split("")
      
        for(let i =0;i<array.length;i++){
          if(vowels.includes(array[i])){
            array.splice(i,1)
            
            return array.join("")
          }
    
        }
    
      }
       function secondFunction(word){
      let vowels = "aeiou"
      let array = word.split("").reverse()
      
      
        for(let i =0;i<word.length;i++){
          if(vowels.includes(array[i])){
            array.splice(i,1)
            
            return array.reverse().join("")
          }
    
        }
    
      }
      
    
    remove_vowel("abc adbe adbe adbe adbe")