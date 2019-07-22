
//(*) Find the K'th element of a list. The first element in the list is number 1.


const elementAt=(arr,k)=>k<arr.length?arr[k-1]:"No element in that position"
console.log(elementAt([1,2,3,4],2))
console.log(elementAt(["a","b","c","d"],3))
console.log(elementAt([]))
console.log(elementAt([10],3))
console.log(elementAt("riyaz pasha",5))

/* 
2
"c"
"No element in that position"
"No element in that position"
"z"
*/