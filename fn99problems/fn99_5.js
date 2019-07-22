//(*) Reverse a list.


const Reverse=(arr)=>Array.isArray(arr)?arr.reverse():arr.split("").reverse().join("")

console.log(Reverse([1,2,3,4]))
console.log(Reverse(["a","b","c","d"]))
console.log(Reverse([]))
console.log(Reverse([10]))
console.log(Reverse("riyaz pasha"))

/*
[4, 3, 2, 1]
["d", "c", "b", "a"]
[]
[10]
"ahsap zayir"
*/
