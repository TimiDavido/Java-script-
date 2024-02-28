// code to print out even numbers in an array

const numbers = [1,2,3,4,5,6,7,8,9,10]
const result = numbers.filter((evenNum) => {
    return evenNum % 2 === 0;
})

console.log(result)

// code to print out odd numbers in an array
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const result = numbers.filter((evenNum) => {
//     return evenNum % 2 !== 0;
// })

// console.log(result)