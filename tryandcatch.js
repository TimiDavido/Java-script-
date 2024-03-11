//Write a function that takes an array of numbers and returns the sum of the squared values.
// Write a function that takes two numbers as parameters and divides them. 
// Implement a try-catch block to handle the case where the second number is zero.



// try{
//    function func(a , b){
      
//       if (b === 0){ 
//          throw new Error("You can't divide by 0, sho get!!!")
//       }
//       else {
//          console.log(a / b)
//       } 
//    } 
// }
// catch(error){
//    console.error(error)
// }
// func(4,2)


// Create a function that receives an array and an index as parameters. 
// Use a try-catch block to handle the case where the index is out of bounds.



// function getArrayAtIndex(arr, index){
//    try{
//       if (index > arr.length){
//          throw new Error("Can't access!!! Index is more than values in array")
//       }
//       console.log (arr[index])
//    }
//    catch(error){
//       console.error(error)
//    }
// }getArrayAtIndex([1,2,3,4,5,5], 8)



// Write a function that takes an object and a property name as parameters. 
// Use a try-catch block to handle cases where the property does not exist in the object..



// function checkObject(object, property){
//    try{
//       if (property in object){
//          console.log(object[property]) 
//       }
//       else{
//          throw new Error("The Property is not found in the object")
//       }
//    }
//    catch(error){
//       console.error(error)
//    }
// }
// checkObject ({ name: "Timi",
//                city: "New York",
//                club: "Manchester city" },'city')



// Develop a simple program that prompts the user for a number.
//  Use a try-catch block to handle cases where the user enters a non-numeric value.


// let number = window.prompt("HELLO YOU, ENTER A NUMBER")
// try{
//    if(typeof number !== Number){
//       console.log("ERROR!!! This field requires only numbers")
//    }
//    else{
//       console.log(number)
//    } 
// }
// catch(error){
//    console.error(error)
// }


// Build a function that performs a mathematical operation based on user input
//  (addition, subtraction, multiplication, or division).
//  Use a try-catch block to handle cases where the user provides an invalid operation.

function math(a , b , operation) {
    try {
        switch (operation) {
            case "addition":
                console.log(a + b) 
                break;
             case "subtraction":
                console.log(a - b)
                break;
             case "multiplication":
                console.log(a * b)      
             case "division":
                    if (b === 0) {
                        throw new Error("You can;'t divide by 0. Enter a vald divisor");
                    }
                    console.log(a / b)
            default:
                    throw new Error("Invalid operation. Please choose addition, subtraction, multiplication, or division.");
            }
        } catch (error) {
            console.error(error);
            
        }
    }
math(5 , 7, "get remainder")

