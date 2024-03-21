const numbers = [12,4,5,65,6,-3]
const allPositive = numbers.every((elements) => {
  return elements >= 0
})
console.log(allPositive)


const numbers = [12,4,5,65,6,-3]
const atLeastOneNegative = numbers.some((elements) => {
  return elements <= 0
})
console.log(atLeastOneNegative)