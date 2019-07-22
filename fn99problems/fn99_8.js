//(**) Eliminate consecutive duplicates of list elements.



function compress(arr)
{
  let a=[]
  for(let i=0;i<arr.length;i++)
    {
      let flag=true
      for(let j=0;j<a.length;j++)
        {
          if(arr[i]!=a[j])
            continue
          else
            {flag=false;
             break
            }
        }
      if(flag)
        a.push(arr[i])
    }
    
  return a
}

const myCompress=(arr)=>Array.isArray(arr)?compress(arr):compress(arr.split("")).join("")

console.log(myCompress([1,2,3,4,3,2,1]))
console.log(myCompress(["a","b","c","d"]))
console.log(myCompress([]))
console.log(myCompress([10]))
console.log(myCompress("riyaz pasha"))
console.log(myCompress("bob"))



/*
[1, 2, 3, 4]
["a", "b", "c", "d"]
[]
[10]
"riyaz psh"
"bo"
*/