function wave (text) {
  
    let finalArray = []
    let subArray = []
  for ( let i = 0; i < text.length; i++) {
      let arr = text.split('')
      //console.log(arr)
      if ( arr[i] === ' ') { 
         continue
      }
      arr[i] = arr[i].toUpperCase()  
      //console.log(arr)
      finalArray.push(arr.join(''))
      }
      return finalArray
  }