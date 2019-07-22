//(*) Modified run-length encoding.

//Modify the result of problem 10 in such a way that if an element has no duplicates it is simply copied into the result list. Only elements with duplicates are transferred as (N E) lists.


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
      if (count==1)
        {
          a.push(char)
        }
      a.push([count,char])
    }
  return a
}

const myEncode=(arr)=>Array.isArray(arr)?encode(arr):encode(arr.split(""))

console.log(myEncode([1,1,1,1,5,2,2,2,2,3,3,3,2,2,4,3,3,2,2,1,1]))
console.log(myEncode(["a","a","a","b","b","B","c","c","c","d","d","D","d","d"]))
console.log(myEncode([]))
console.log(myEncode([10]))
console.log(myEncode("riyaz pasha"))
/*
[[4, 1], 5, [1, 5], [4, 2], [3, 3], [2, 2], 4, [1, 4], [2, 3], [2, 2], [2, 1]]
[[3, "a"], [2, "b"], "B", [1, "B"], [3, "c"], [2, "d"], "D", [1, "D"], [2, "d"]]
[]
[10, [1, 10]]
["r", [1, "r"], "i", [1, "i"], "y", [1, "y"], "a", [1, "a"], "z", [1, "z"], " ", [1, " "], "p", [1, "p"], "a", [1, "a"], "s", [1, "s"], "h", [1, "h"], "a", [1, "a"]]
[[3, "b"], [2, "o"], "O", [1, "O"], "o", [1, "o"], [5, "b"]]
*/
