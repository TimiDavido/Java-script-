//code to square multiply numbers in an array by 2

const numbers = [1,2,3,4,5,6,7,8,9,10]

const result = numbers.map((squareNum) => {
    return Math.pow(squareNum,2)
})

console.log(result)


// const students = ["TImi" , "David" , "Brenda", "Esther"]

// const result = students.map((upperStudent) => {
//     return upperStudent.toUpperCase()
// }) 

// console.log(result)