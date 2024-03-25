// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example:
// filter_list([1,2,'a','b']) == [1,2]

// function filterList(array){
//     const result = array.filter((elements) => {
//         return typeof elements === "number"
//     })
//     return result
// }
// filterList([7,2,10,'a','b','Timi']) 

function filterList(array){
  let newArr = []
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === "number" && array[i] > 0){
       newArr.push(array[i])
    }
  }
  return newArr
}
filterList([7,2,10,'a','b','dog']) 