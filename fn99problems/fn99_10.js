//(*) Run-length encoding of a list. Use the result of problem P09 to implement the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as lists (N E) where N is the number of duplicates of the element E.
function encode(arr)
{
  var a=[]
  var n=arr.length
  for(var i=0;i<n;i++)
    {
      var count=1
      var char=arr[i]
      for(var j=i+1;j<n;j++)
        {
          if(char==arr[j])
            {
              count++
              i++
            }
          else
            break
        }
      a.push([count,char])
    }
  return a
}

const myEncode=(arr)=>Array.isArray(arr)?encode(arr):encode(arr.split(""))

console.log(myEncode([1,1,1,1,2,2,2,2,3,3,3,2,2,4,3,3,2,2,1,1]))
console.log(myEncode(["a","a","a","b","b","b","c","c","c","d","d","d","d","d"]))
console.log(myEncode([]))
console.log(myEncode([10]))
console.log(myEncode("riyaz pasha"))
console.log(myEncode("bbboooobbbbb"))
/*
[[4, 1], [4, 2], [3, 3], [2, 2], [1, 4], [2, 3], [2, 2], [2, 1]]
[[3, "a"], [3, "b"], [3, "c"], [5, "d"]]
[]
[[1, 10]]
[[1, "r"], [1, "i"], [1, "y"], [1, "a"], [1, "z"], [1, " "], [1, "p"], [1, "a"], [1, "s"], [1, "h"], [1, "a"]]
[[3, "b"], [4, "o"], [5, "b"]]
*/
