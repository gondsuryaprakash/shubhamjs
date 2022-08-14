/*

Array 

*/


var arr= ['Shuabham', 1,true, null]
var arr1= [1,2,3,4]
        //   0        1  2    3
console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[3])

//For Loop   Iteration of array
var sum =0 ;
for(var i=0;i<arr1.length;i++) {
    sum+=arr1[1]
}

//Advance ES6  map 

var newArr1= arr1.map((item, index)=>{
    console.log(index, item*2)
    return item= item*2
  
})

console.log("newArr1",newArr1)

// foreach
arr1.forEach((item, index)=>{
    console.log(item, index)
})


function GetName(name) {
    return ""
}

var a = GetName("Shubham")
console.log(a)

Filter 

var arr3= ['Kutta', 'Palatu Kutta', 'Billi', 'Tommy']

arr4 = arr3.filter((item)=> item!='Billi')
console.log(arr4)

//Reduce  --->  

