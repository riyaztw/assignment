//(**) Drop every N'th element from a list.


function drop(arr,n)
{
  var a=[]
  for(var i=0;i<arr.length;i++)
    {
      if((i+1)%n==0)
        continue
      a.push(arr[i])
    }
  return a
}

const dropEvery=(arr,n)=>Array.isArray(arr)?drop(arr,n):drop(arr.split(""),n).join("")

console.log(dropEvery([1,2,3,4,3,2,1],2))
console.log(dropEvery(["a","b","c","d"],2))
console.log(dropEvery([],2))
console.log(dropEvery([10],5))
console.log(dropEvery("riyaz pasha",2))
console.log(dropEvery("abcdefghik",3))

/*
[1, 3, 3, 1]
["a", "c"]
[]
[10]
"ryzpsa"
"abdeghk"
*/
