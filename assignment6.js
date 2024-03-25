function returnAge(string){
   let age = Number(string[0]+string[1])
      if (age > 0 && age < 10){
        return age
      }
  }
  returnAge("9 years old")
  