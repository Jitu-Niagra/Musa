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
    var e=document.getElementById("corColor")
   if(e.checked){
       document.getElementById("rigColor").style="opacity:100%"
       document.getElementById("wroColor").style="opacity:0%"
       
       
   }
   else{
    document.getElementById("wroColor").style="opacity:100% "
    document.getElementById("rigColor").style="opacity:0% "
    
      
   }
    
   
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
cssFrame=()=>{
    console.log("clicked")
    var e=document.getElementById("corFrame")
   if(e.checked){
       document.getElementById("rigFrame").style="opacity:100%"
       document.getElementById("wroFrame").style="opacity:0%"
       
       
   }
   else{
    document.getElementById("wroFrame").style="opacity:100% "
    document.getElementById("rigFrame").style="opacity:0% "
    
      
   }
}
sleepTime=()=>{
    console.log("clicked")
    var e=document.getElementById("corSleep")
   if(e.checked){
       document.getElementById("rigSleep").style="opacity:100%"
       document.getElementById("wroSleep").style="opacity:0%"
       
       
   }
   else{
    document.getElementById("wroSleep").style="opacity:100% "
    document.getElementById("rigSleep").style="opacity:0% "
    
      
   }
}
favFood=()=>{
    console.log("clicked")
    var e=document.getElementById("corFood")
   if(e.checked){
       document.getElementById("rigFood").style="opacity:100%"
       document.getElementById("wroFood").style="opacity:0%"
       
       
   }
   else{
    document.getElementById("wroFood").style="opacity:100% "
    document.getElementById("rigFood").style="opacity:0% "
    
      
   }
}


// document.getElementById('submit').onclick = function() {
//   alert(document.querySelector('input[type=checkbox][name=gender]:checked').value);
// }