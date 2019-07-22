const lastElement=arr=>(arr.length>2?arr[arr.length-2]:"No element in that position")

console.log(lastElement([1,2,3,4]))
console.log(lastElement(["a","b","c","d"]))
console.log(lastElement([]))
console.log(lastElement([10]))
