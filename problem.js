// let obj = {
//     name:'Rajkamal',
//     age:21,
// }
// let arr = ['rajkamal','rahul','arnav','krunal',obj]
// arr.pop()
// arr.pop()
// arr.pop()
// arr.unshift("cherry")

//   -----array------
// for (let i =0; i < arr.length; i++){
//     console.log(arr[i])
// }

// let arr = [1,2,3,4,5]
// let i = 0
// while (i<arr.length) {
//     console.log(arr[i])
//     i++;
// }

// map method
// const nums = [1,2,3,4,5]

// const newNums = nums.map((item, index, array)=>{
//     return item;
// })

// console.log(newNums)
// Output: [ 1, 2, 3, 4, 5 ]

// filter method
// let nums = [1,2,3,4,5,6,7]
// let nums1 = nums.filter((item, index, array)=>{
//    return item > 4
// })
// console.log(nums1)
// Output: [ 5, 6, 7 ]

// Reduce method

// const num = [1,2,3,4,5,6]

// const sum = num.reduce((prev, item)=>{
//     return prev + item
// }, 2)
// console.log(sum)
// Output : 23

// Some method

// const num = [1,2,3,4,5,6,7]
// const sum = num.some((item, index, array)=>{
//     return item> 5
// })

// console.log(sum)
// Output: true

// every method

// const num = [1,2,3,4,5,6]
// const sum = num.every((item, index, array) => {
//  return item > 4
// })
// console.log(sum)
// output: false

// const num = [1,2,3,4,5,6]

// const sum = num.find((item,index,array)=>{
//     return item > 2
// })
// console.log(sum)
// Output: 3

// Spread and Rest Operators
// const nums = [1,2,3,4,5]
// const nums2 = [1,2,3,4,5]
// const mergenums = [...nums, ...nums2]
// console.log(mergenums)
// Output: [1, 2, 3, 4, 5,
//          1, 2, 3, 4, 5
//         ]

// This is spread opretor
//rest opretor
// const num1 = [1,2,3,4,5]
// const num2 = [5,4,3,2,1]

// function sum(...numbers) {
//     return numbers
// }
// console.log(sum(num1 , num2))

//Concate
// const num3 = {
//     name:'rajkamal',
//     age: 12,
// }
// const num1 = [1,2,3,4,5]
// const num2 = [5,4,3,2,1]
// const arr = ['whaat ', 'is', 'your', 'name']

// const newArry = num1.concat(num2, arr, num3)
// console.log(newArry)
// Output:
// [1,
// 2,
// 3,
// 4,
// 5,
// 5,
// 4,
// 3,
// 2,
// 1,
// 'whaat ',
// 'is',
// 'your',
// 'name',
// { name: 'rajkamal', age: 12 }
// ]

//Slice method
// let arr = [1,2,3,4,5]
// let newArry = arr.slice(0,2)
// console.log(newArry)

// let arr = ['tiger','bear','wolf']
// arr.splice(1,2,'orange')
// console.log(arr);
// Output;[ 'tiger', 'orange' ]

//Fill
// const dummy = [2,3,4,5,6]
// dummy.fill(9,3);
// console.log(dummy)
// Output: [ 2, 3, 4, 9, 9 ]

//FindIndex
// let nums = [1,2,3,4,5]
// const index = nums.findIndex((item)=> item === 2
// )
// console.log(index)

// Flat

// const flatEx = [1,[2,3],[[4,5],6]]
// const flattendarry = flatEx.flat(2)
// console.log(flattendarry)

// reverse
// const nums = [1,2,3,4]
// console.log(nums)
// nums.reverse();
// console.log(nums)

//short funtion
// const unsortedarr = [4,3,5,2,1]
// unsortedarr.sort((a,b) => a - b);
// console.log(unsortedarr)

// const arr = [12,35,1,10,34,1]
// arr.sort()

// console.log(arr)

//Javascript basic

// map in dept
// const nums = [1,2,3,4,5]
// const multiplybythree = nums.map((num, index, arr)=>{
//     return num + index

// })
// console.log(multiplybythree)

// reduce method

// Problem 1: Find the First Non-Repeating Character in a String (Using HashMap)
// Given a string s, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Input: "leetcode"
// Output: 0
// Explanation: The first non-repeating character is 'l', and its index is 0.

// let m = new Map()

// let arr = ['starwbarry','apple','pinapple']
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,5,4,3,3,2]
// m.set("key", arr)
// m.set("key1", arr1)
// m.set("key2", arr2)

// console.log(m.get("key"))

//what is has in hasMap

//Basic loop

// const arr = [1,2,3,4,5]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

//for...of loop
// const number = [10,20,30,40]
// for (const num of number){
//     console.log(num)
// }

//for...in
// const person = {name: "Rajkamal", age:25, job: 'Frontend Developer'};
// for (const key in person){
//     console.log(`${key}: ${person[key]}`)
// }

// const mySet = new Set()
// mySet.add("THIS")
// mySet.add("what")

// console.log(mySet.has("what"))

// const arr = [2,3,4,5]
// console.log(arr)
function patter1 (n) {
    for ( let row = 1; row <= n ; row ++){
        let star = ""
        for(let col = 1; col<= row; col ++){
            star +="*";
        }
        console.log(star)
    }
}
patter1(5)


