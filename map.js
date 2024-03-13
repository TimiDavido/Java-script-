//code to square multiply numbers in an array by 2

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const result = numbers.map((squareNum) => {
//     return Math.pow(squareNum,2)
// })

// console.log(result)

// Given an array of strings, use the map method to create a new array where each string is in capital letter
// const students = ["TImi" , "David" , "Brenda", "Esther"]
// const result = students.map((elements) => {
//     return elements.toUpperCase()
// }) 




// Given an array of objects with 'name' properties, use the map method to create a new array of strings where each string is "Hello, {name}!".
// let array = [{name : "Timi "},
//             {name : "Ade"} ,
//              {name : "Brenda"} ]

// const result = array.map((elements) => {
//   return `Hello ${elements.name}`
// })

// console.log(result)

// Given an array of numbers, use the map method to create a new array where odd numbers are doubled, and even numbers are tripled.
// let array = [1,2,3,4,5,6,7,8,9]
// const result = array.map((elements => {
//   return elements % 2 == 0 ? elements*2 : elements*3
// }))
// console.log(result)


// Given an array of strings, use the map method to create a new array where each string is followed by its index in the original array.
// let array = ['Timi', 'Brenda', 'Pelumi']
// const result = array.map((elements, index) => {
//   return elements + " " + [index]
// })
// console.log(result)

// Given an array of strings, convert each string to uppercase using the map method, then create a new array where each string is concatenated with " - PROCESSED".

// let array = ['Timi', 'Lionel', 'Anna']
// const result = array.map((elements => {
//   return elements.toUpperCase() && elements + " " + "processed"
// }))

// console.log(result)