let link ="hello world"
function firstBotMessage() {
  document.getElementById("botStarterMessage").style.display = "inline-block"
}

function getBotResponse(input) {
  //  greetings
  let arr = ["hello" , "hey" ,"hi",'how are you?']
  let byeGreet = ["thank you","see you","bye","okay","i appreciate"]

  // welcome conditions
  for (item of arr){
    if(input == item){
    return  '<p class="botText"><span>' + 'hello there,' + '<br> i will be your assistant for today' + '</span></p>'
   }}

   for (item of byeGreet){
    if(input == item){
    return  '<p class="botText"><span>' + 'thank you,' + '<br> Have a nice day' + '</span></p>'
   }}
// other conditions

  if(input == 1){
     return(
      '<div class= "botText">'
      + '<ul class= "botText-ul">' 
      +'<li>Pizza </li>'
      +'<li>French Rolls</li>'
      +'<li> Sussage </li>'
      +'<li> Sandwiches </li>'
      +'<p> please visit <a href="#"> here </a> for more details </p>'
      + '</ul>'
     )}
   else if (input == 2){
        return (
      '<div class= "botText">'
      +'<ul class= "botText-ul">' 
      +'<li> Naija dishes </li>'
      +'<li> Italian dishes</li>'
      +'<li> Continental dishes  </li>'
      +'<p> please visit <a href="#"> here </a> for more details </p>'
      + '</ul>'
        ) 
         
       }
    else if (input == 3){
        return (
      '<div class= "botText">'
      +'<ul class= "botText-ul">' 
      +'<li> Naija dishes </li>'
      +'<li> Italian dishes</li>'
      +'<li> Continental dishes  </li>'
      +'<p> please visit <a href="#"> here </a> for more details </p>'
      + '</ul>'
        ) 
         
       }
      else if (input == 4){
        return '<p class="botText"><span>' + 'every chosen food has a specified time on it, but our delivery time limit does not exceed 2 hours maximum' + '</span></p>'
      }
      else if (input == 5)  {
        return '<p class="botText"><span>' + 'by placing an order you will be redirected to our checkout page , where you can pay using any of the payment cards' + '</span></p>'
      
        }
       
       else {
            return '<p class="botText"><span>' + 'please choose from the menu above. ' + '</span></p>'

}}
 

