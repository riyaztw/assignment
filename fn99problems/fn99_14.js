//(*) Duplicate the elements of a list.


function dupli(arr)
{
  var a=[]
  var n=arr.length
  for(var i=0;i<n;i++)
    {
      a.push(arr[i],arr[i])
    }
  return a
}

const myReplicate=(arr)=>Array.isArray(arr)?dupli(arr):dupli(arr.split("")).join("")

console.log(myDuplicate([1,2,3,4,3,2,1]))
console.log(myDuplicate(["a","b","c","d"]))
console.log(myDuplicate([]))
console.log(myDuplicate([10]))
console.log(myDuplicate("riyaz pasha"))
console.log(myDuplicate("bob"))
/*
[1, 1, 2, 2, 3, 3, 4, 4, 3, 3, 2, 2, 1, 1]
["a", "a", "b", "b", "c", "c", "d", "d"]
[]
[10, 10]
"rriiyyaazz  ppaasshhaa"
"bboobb"
*/
