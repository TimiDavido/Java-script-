// code to print out the sum of an array 

const numbers = [1,2,3,4,5,6,7,8,9,10]
const result = numbers.reduce((accumulator,element) => {
    return accumulator + element;
})

console.log(result)