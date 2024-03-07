// const parseBinaray = (list) => {
//   let internalparse = [];
//   for(let idx = 0; idx < list.length; idx++)
//     let conf = parseInt(list[idx]);
//     if(conf < 5){
//       internalparse.push(0)
//     }
//     else{
//       internalparse.push(1)
//     }
//   }
//   return internalparse;
// }
// parseBinaray(['1','2','3','4','7','9'])


function numToBinary(numbers){
    let myArray = []
    for (let i = 0; i < numbers.length; i++){
        let result = parseInt(numbers[i])
        if(result < 5){
            myArray.push(0)
        }
        else{
            myArray.push(1)
          console.log(myArray)
        }
    }
   
}

numToBinary(['1','2','3','8'])