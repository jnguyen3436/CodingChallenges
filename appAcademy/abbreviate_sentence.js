// checks if string is longer than 4 characters, if longer, removes vowels

function abbreviate_sentence(sentence) {
    let arraySentence = sentence.split(" ");
    let newWord = [];
    arraySentence.forEach(word =>{
      if(word.length<5){
        newWord.push(word);
      }
      else
      newWord.push(checkVowel(word));
    })
    return (newWord.join(" "))
  
  }
  
  function checkVowel(word){
    let noVowel = "";
    let vowels = "aeiou"
    for(let i = 0;i<word.length;i++){
      if(vowels.includes(word[i]))
        continue;
      else
      noVowel += word[i];
    }
    
    return noVowel
  }
  
  
  abbreviate_sentence("follow the yellow brick road") // "fllw the yllw brck road"
