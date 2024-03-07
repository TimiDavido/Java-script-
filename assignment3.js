// function convertNameToAbb(){
   
//     let surNanme = prompt("Enter surname")
//     let firstLetterSname = surNanme[0].toUpperCase()

    
//     let firstname = prompt("Enter first name")
//     let firstLetterFname = firstname[0].toUpperCase()

//     console.log(firstLetterSname + "." + firstLetterFname)
   
// }
 
// convertNameToAbb();

// function convertNameToAbb(fname,lname){
//     fname = fname[0].toUpperCase();
//     lname = lname[0].toUpperCase();
    
//     console.log(fname + "." + lname)
//   }
//   convertNameToAbb("Timi","David")

// function convertNameToAbb(fullname){
//     let myArr = fullname.split(" ")
//     console.log((myArr[0][0] + "." + myArr[1][0]).toUpperCase())
// }
// convertNameToAbb("timi david")



function nameToInitials(name){
  let initials = "";
  
  for(let idx = 0; idx < name.length; idx++){
    if(name[idx] == " "){
      initials = `${name[0]}.${name[idx + 1]}`
    }
  }
  
  return initials;
}
nameToInitials("Timi David");
