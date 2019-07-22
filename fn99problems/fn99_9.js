//(**) Pack consecutive duplicates of list elements into sublists. If a list contains repeated elements they should be placed in separate sublists.


function pack(arr)
{
  var a=[]
  var n=arr.length
  for(var i=0;i<n;i++)
    {
      var temp=[]
      temp.push(arr[i])
      for(var j=i+1;j<n;j++)
        {
          if(arr[i]==arr[j])
            {
              temp.push(arr[i])
              i++
            }
          else
            break
        }
      a.push(temp)
    }
  return a
}

const myPack=(arr)=>Array.isArray(arr)?pack(arr):pack(arr.split(""))

console.log(myPack([1,1,1,1,2,2,2,2,3,3,3,2,2,4,3,3,2,2,1,1]))
console.log(myPack(["a","a","a","b","b","b","c","c","c","d","d","d","d","d"]))
console.log(myPack([]))
console.log(myPack([10]))
console.log(myPack("riyaz pasha"))
console.log(myPack("bbboooobbbbb"))
/*
[[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3], [2, 2], [4], [3, 3], [2, 2], [1, 1]]
[["a", "a", "a"], ["b", "b", "b"], ["c", "c", "c"], ["d", "d", "d", "d", "d"]]
[]
[[10]]
[["r"], ["i"], ["y"], ["a"], ["z"], [" "], ["p"], ["a"], ["s"], ["h"], ["a"]]
[["b", "b", "b"], ["o", "o", "o", "o"], ["b", "b", "b", "b", "b"]]*/
