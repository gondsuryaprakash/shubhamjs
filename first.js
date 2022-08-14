/*
var ---> function scoped
let  ---> Block Scoped
const --->Const Block Scoped But we can't change value 
*/ 

console.log('Start')

function ShowName(){
   let name=""
   if(true) {
     name="Shubham"
   }
//    const name = "Shubham"
//    name= "Surya" 
   console.log(name) //"Shubham"
}

ShowName()

console.log("End")

// console.log(name)  



