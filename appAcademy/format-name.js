//formats names properly
function format_name(name){
    let lowercaseName = name.toLowerCase();
    let splitName = lowercaseName.split(" ")
    let formatName = []
  
    splitName.forEach(part =>{
     part = part.charAt(0).toUpperCase()+part.slice(1);
     console.log(part)
     formatName.push(part)
    })
    return formatName.join(" ")
    
  
  
  
  }
  format_name("chase WILSON")