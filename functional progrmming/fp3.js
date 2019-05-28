const square=x=>x*x
const cube=x=>square(x)*x
const sum=arr=>arr.reduce((acc,x)=>acc+x)
const powerOf=(x,n)=>x**n

function sumOfSquares(arr)
{
  return arr.map(x=>square(x)).reduce((acc,x)=>acc+x)
}
function sumOfCubes(arr)
{
  return arr.map(x=>cube(x)).reduce((acc,x)=>acc+x)
}
function sumOf(arr,power)
{
  return arr.map(x=>powerOf(x,power)).reduce((acc,x)=>acc+x)
}

console.log(sum([1,2,3,4,5]))
console.log(sumOfSquares([1,2,3]))

console.log(sumOfCubes([1,2,3]))

console.log(sumOf([1,2,3],2))
console.log(sumOf([1,2,3],3))

