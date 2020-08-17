// converts names to initials

function to_initials(name){
    let parts = name.split(" ");
    let initials = "";
    parts.forEach(part=>{
      initials += part[0];
    })
    return initials
    }
    to_initials("Kelvin Bridges") ;      