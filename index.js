function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return "This one is on me!";
  } else if (value > 2000 && value <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (value > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ?
     "Ok, sounds good.": "No go.";
    
  } 
    
  
  


function switchOnCharmFromTip(){
  if(generous){
    return "Thank you so much."
  } else if (notAsGenerous){
    return "Thank you."
  } else if (anythingElse){
    return "Bye."
  }
  
}