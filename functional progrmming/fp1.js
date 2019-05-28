const add = (a,b)=>a+b
const mult = (a,b)=>a*b

function sumOfSquares(arr)
{
  return arr.length===0?0:add(arr[0]*arr[0],sumOfSquares(arr.slice(1)))
}

function sumOfCubes(arr)
{
  return arr.length===0?0:add(arr[0]*arr[0]*arr[0],sumOfCubes(arr.slice(1)))
}

function product(arr)
{
  return arr.length===0?1:mult(arr[0],product(arr.slice(1)))
}

console.log("product of 1,2,3 : "+product([1,2,3]))
console.log("sum of squaress of 1,2,3 : "+sumOfSquares([1,2,3]))
console.log ("sum of cubes 0f 1,2,3 :"+sumOfCubes([1,2,3]))


