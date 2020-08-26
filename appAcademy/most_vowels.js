//return word with most vowels
function most_vowels(sentence){
    counts = {}
    sentence.split(" ").forEach(word =>{
      counts[word] = vowel_count(word)
    })
    console.log(counts)
      let keysSorted = Object.keys(counts).sort(function(a,b){return counts[a]-counts[b]})
      
      return keysSorted[keysSorted.length -1]
    
    }
    
    function vowel_count(word){
      vowels = "aeiou";
      count = 0;
      let split = word.split("")
      
      split.forEach(letter=>{
        
      if(vowels.includes(letter))
          count+=1
      }
        
          
      )
      return count
    }
    
    
    most_vowels("what a wonderful life")