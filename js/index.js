// User clicks 
// get the value
// check if correct 
// display the answer
  

var userInput=document.querySelector("checkd")
correctAnswer=()=>{
   var e=document.getElementById("correct")
   if(e.checked){
       document.getElementById("right").style="opacity:100%"
       document.getElementById("wrong").style="opacity:0%"
       
       
   }
   else{
    document.getElementById("wrong").style="opacity:100% "
    document.getElementById("right").style="opacity:0% "
    
      
   }
console.log() 
}
changeColor=()=>{
    
   
}
timeLate=()=>{
    console.log("clicked")
    var e=document.getElementById("corTime")
   if(e.checked){
       document.getElementById("rigTime").style="opacity:100%"
       document.getElementById("wroTime").style="opacity:0%"
       
       
   }
   else{
    document.getElementById("wroTime").style="opacity:100% "
    document.getElementById("rigTime").style="opacity:0% "
    
      
   }
}


// document.getElementById('submit').onclick = function() {
//   alert(document.querySelector('input[type=checkbox][name=gender]:checked').value);
// }