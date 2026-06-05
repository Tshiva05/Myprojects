
  //Display 
  
 let display = document.getElementById("input")
 
 // buttons 
let button = document.querySelectorAll("button")
function appendvalue(value){
display.value+=value}

//All Clear Button ( AC )
let clears = document.getElementById("clear").addEventListener("click",()=>{
  display.value=""})

//Delete Button 

let deletebtn =document.getElementById("Delete")

deletebtn.addEventListener("click",()=>{
  display.value=display.value.slice(0,-1)
}) 

//Control Operators

let calculate = document.getElementById("equal").addEventListener("click",()=>{
  try{
   let result =display.value = eval(display.value)
  }
  catch {
    display.value="Error"
  }
}
)

  
  
  