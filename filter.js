// Given an array of numbers, use the filter method to create a new array containing only even numbers.
let array = [1,2,3,4,5,6,7]
const result = array.filter((elements)=>{
  return elements % 2 == 0
})
console.log(result)

// Given an array of strings, use the filter method to
//  create a new array containing only strings with a length greater than 5.
let array = ['timi', 'ade', 'brenda','pelumi']
const result = array.filter((elements) => {
  return elements.length > 5
})
console.log(result)

// Given an array of objects with 'age' properties, use the filter method to 
// create a new array containing only objects where the age is greater than 25.
let array= [
    {age : 25},
    {age : 35},
    {age : 10},
    {age : 20},
    {age : 75},
        ]
  const result = array.filter((elements => {
    return elements.age > 25
  }))
  console.log(result)


