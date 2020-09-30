

getResults=(yourChoice)=>{
    
    let result=0;
    yourChoice=document.querySelector("input[type='radio']:checked");
     var yourAnswer=yourChoice.id
    getValue(yourChoice)
    if(yourAnswer==="correct"){
         result+=10
     }else{
         result-=0;
     }
    
    getScore(result)
}
getValue=(a)=>{
     a.setAttribute
}

getScore=(a)=>{
    
    let d_result=document.getElementById("resDiv");
    var h3=document.createElement("h3")
    var score=document.createTextNode(`Your score is ${a}`)
    h3.setAttribute("class","text-danger")
    h3.appendChild(score)
    d_result.appendChild(h3)
    
}


    

    
        
    
   
   
    
    
    
  

 