function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here

  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
  if the letters don't match, return false

  if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here

  This function takes in a string as an argument, creates a for loop
  to iterate over the string to the middle letter of the string, compares
  the letter that is being iterated over to the corresponding letter
  from the end of the string.

  If the letters match, the function returns true. If not, the function
  returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true')
  console.log("=>", isPalindrome("level"))

  console.log("");

  console.log('Expecting: false')
  console.log("=>", isPalindrome("boy"))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
