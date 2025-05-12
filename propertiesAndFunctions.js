

// strings ----- 


let str1 = "shaik sadhik";


// character (single letter) and string (grp of characters)

// properties and functions(methods)(actions)  ----- car 


console.log(str1.length, 'length') // 6

console.log(str1.toUpperCase()) // SADHIK

console.log(str1.toLowerCase())

console.log(str1.charAt(1), 'character')

console.log(str1.slice(0, 3), "splitting")

console.log(str1.substring(0, 3), "using substr")

// includes, matches

console.log(str1.includes("sh"), "matching")

console.log(str1.indexOf('s'), "first index of s")

console.log(str1.lastIndexOf('s'), "last index of s")

console.log(str1.trim(), "trim") // which will remove spaces on starting and ending

console.log(str1.split(' '), 'splitting on the basis of')


// array methods


let arr = [1, 2,  3, 4]

console.log(arr.push(67), arr) // add in the end

console.log(arr.unshift(0)) // adding ele in the start

arr.pop()

console.log(arr, 'pop') // remove the last item

arr.shift()


console.log(arr, 'shift') // remove the first item 

console.log(arr.length, "length of array")

console.log(arr.includes(4), "searching")

console.log(arr.slice(0, 2), "slice")


// using splice


let arr3 = [11,12,13,14,15]

// splice('start index', "how many elements to delete", "elements u want to add")

// arr3.splice(1,4,18)


arr3.splice(3,0,78,80,79)





// deletion and addition at particular index


// starting index



// slice() --- slice(3, 5) ---- 



let arr4 = [40,41,42,43]

console.log(arr4.slice(0,3),'slice in arr4')

console.log(arr4)

console.log(arr4.splice(1,2),'this is splice')

console.log(arr4,'this is after splice');


// number ----- 


const number = 3.141615


console.log(number.toFixed(2),'fixed')


console.log(Math.round(number),'rounding')

console.log(Math.min(1,2,0),"maxinmum")

console.log(Math.round((Math.random() * 100)),"random number from 0,1")




var a = number.toString() // explicit coersion

console.log(typeof(a),'string')

// number + string // implicit coersion



console.log( 2 + '2' ) // 22 implicit coersion


console.log(2 + Number('2') ,"this explicit") //


console.log(Math.ceil(3.00001),"ceil")

console.log(Math.floor(3.99),"floor")




















console.log(arr3,"arr3")











































let c = a + 3; // imaginary numbers



let z; // undefined


console.log(c, "c output")


var a = 5;


let d = a + 3;


console.log(d, 'd output')
