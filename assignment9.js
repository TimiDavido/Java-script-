// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false 

function result(string1,string2){
    if(string1[string1.length - 2] == string2[0] && string1[string1.length - 1] == string2[1]){ 
    return true
    }
    return false
  }
  result('abc', 'bc')