// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function arrayWords(array){
    let sentence = ''
    sentence += array
    let result = sentence.replaceAll("," , " ")
    console.log(result)
    return result

  }
  arrayWords(['hello', 'world', 'this', 'is', 'great'])


  function concatArray(array){
    let sentence = ''
    for(let i = 0; i < array.length; i++){
      sentence += array[i] + ' '
    }
    let result = '';
    for (let i = 0; i < sentence.length - 1; i++) {
      result += sentence[i];
    }
    return result;
  }
  concatArray(['hello', 'world', 'this', 'is', 'great'])
  
