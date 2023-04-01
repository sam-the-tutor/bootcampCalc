import { CalcDay1_backend } from "../../declarations/CalcDay1_backend";


//when the window loads for the first time
window.addEventListener('load', async () => {

  const result = await CalcDay1_backend.see()
  document.getElementById("result").innerHTML = result
  
});



//allow user to type using the keyboard on the screen
document.querySelector("#calc")
.addEventListener("click", async (e) =>{
  if(e.target.className.includes("number")){

    const index = e.target.id 
    document.getElementById("inputValue").value += index
  }
})



//perform addition
document.querySelector("#plus")
.addEventListener("click", async (e) =>{
  const num = parseFloat(document.getElementById("inputValue").value)
              
  //call the add method of the canister
  const Result = await CalcDay1_backend.add(num)

  document.getElementById("result").innerHTML = Result

})


//perform subtraction
document.querySelector("#subtract")
.addEventListener("click", async () =>{
  
  const num = parseFloat(document.getElementById("#inputValue").value)
  console.log("sub num:",num)
              
  //call the sub method of the canister
  //const Result = await CalcDay1_backend.sub(num)

 // document.getElementById("result").innerHTML = Result

})


//perform multiply
document.querySelector("#multiply")
.addEventListener("click", async (e) =>{
  const num = parseFloat(document.getElementById("inputValue").value)     

  //call the mul method of the canister
  const Result = await CalcDay1_backend.mul(num)

  document.getElementById("result").innerHTML = Result

})

//perform division
document.querySelector("#divide")
.addEventListener("click", async (e) =>{
  const num = parseFloat(document.getElementById("inputValue").value)       

  //call the div method of the canister
  const Result = await CalcDay1_backend.div(num)

  document.getElementById("result").innerHTML = Result

})


//perform square root
document.querySelector("#root")
.addEventListener("click", async (e) =>{

  //call the sqrt method of the canister
  const Result = await CalcDay1_backend.sqrt()
 
  document.getElementById("result").innerHTML = Result

})


//perform power
document.querySelector("#power")
.addEventListener("click", async (e) =>{
  const num = parseFloat(document.getElementById("inputValue").value)
              

  //call the pow method of the canister
  const Result = await CalcDay1_backend.pow(num)

  document.getElementById("result").innerHTML = Result

})


//perform floor
document.querySelector("#floor")
.addEventListener("click", async (e) =>{

  //call the floor method of the canister
  const Result = await CalcDay1_backend.floor()

  document.getElementById("result").innerHTML = Result

})


//perform reset
document.querySelector("#reset")
.addEventListener("click", async (e) =>{

  //call the reset method of the canister
  await CalcDay1_backend.reset()
  const result = await CalcDay1_backend.see()

  document.getElementById("result").innerHTML = result
})



