function palindrome(str) {
  // Good luck!
  let newStr = str;
  for(let i = 0; i < str.length; i++)
    newStr = newStr.replace(/[^a-zA-Z0-9]/, '')
  console.log(newStr)
  let reversedStr = ''
  for(let i = newStr.length-1; i >= 0; i--) {
    reversedStr += newStr[i]
  }
  console.log(reversedStr)
  return newStr.toLowerCase() == reversedStr.toLowerCase()
}



palindrome("_eye");
palindrome("A man, a plan, a canal. Panama")