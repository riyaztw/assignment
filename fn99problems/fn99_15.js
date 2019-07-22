//(**) Replicate the elements of a list a given number of times.


function repli(arr,n)
{
  var a=[]
  for(var i=0;i<arr.length;i++)
    {
      for(let j=0;j<n;j++)
        a.push(arr[i])
    }
  return a
}

const myReplicate=(arr,n)=>Array.isArray(arr)?repli(arr,n):repli(arr.split(""),n).join("")

console.log(myReplicate([1,2,3,4,3,2,1],2))
console.log(myReplicate(["a","b","c","d"],2))
console.log(myReplicate([],2))
console.log(myReplicate([10],5))
console.log(myReplicate("riyaz pasha",2))
console.log(myReplicate("bob",4))
/*
[1, 1, 2, 2, 3, 3, 4, 4, 3, 3, 2, 2, 1, 1]
["a", "a", "b", "b", "c", "c", "d", "d"]
[]
[10, 10, 10, 10, 10]
"rriiyyaazz  ppaasshhaa"
"bbbboooobbbb"
*/