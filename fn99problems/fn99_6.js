//(*) Find out whether a list is a palindrome. A palindrome can be read forward or backward; e.g. (x a m a x).


function pali(arr)
{
  if (arr.length <=1)
    return true
  if(arr[0]==arr[arr.length-1])
    return pali(arr.slice(1,arr.length-1))
  
  return false
}

const isPalindrome=(arr)=>Array.isArray(arr)?pali(arr):pali(arr.split(""))

console.log(isPalindrome([1,2,3,4,3,2,1]))
console.log(isPalindrome(["a","b","c","d"]))
console.log(isPalindrome([]))
console.log(isPalindrome([10]))
console.log(isPalindrome("riyaz pasha"))
console.log(isPalindrome("bob"))
/*
true
false
true
true
false
true
*/
