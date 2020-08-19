//formats names properly  

//2nd function just checks if name is inproper format first name and last name required
function format_name(name){
    let lowercaseName = name.toLowerCase();
    let splitName = lowercaseName.split(" ")
    let formatName = []
  
    splitName.forEach(part =>{
     part = part.charAt(0).toUpperCase()+part.slice(1);
  
     formatName.push(part)
    })
    return formatName.join(" ")
    
  }
  function is_valid_name(name){
    if(name.includes(" "))
      if(name == format_name(name)) 
      return true;
   
  
      return false;
  
  }
  
  is_valid_name("Brad aby")
       
  
  
  