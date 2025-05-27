
// all the variable declarations will be on the starting of running js known as hoisting

console.log(a, "rdafasdfs")

var a = 5;


console.log(a, "here")

// ------------------------------

// implicit coercion --- data type will automatically change js 

// bodmas rule 
// + ---- concatenation (join of str) , + (addition)

// -,/,*,% --- 

console.log('a' + 1)

// explicit coersion ---- user given 


console.log('1' + 1) // 11 ---- string

console.log(Number('1') + 1)


// str.length 
// str.uppercase()

// hello, world ---- replce(',',"and")

let str = 'hello , world';

console.log(str.replace(',', "and"))

1 == 0 // false , 0 > 2 // false

console.log((true == false) > 2)


console.log(89 + 90 / 9 + 'hello')


const aminal = {
    name: "dog",
    brid: ''
}


// const str2 = 'prop';

// const arrayOfstr = str2.split('');

// console.log(arrayOfstr, 'array')

// const duplicates = []


// console.log(arrayOfstr.indexOf('p')) // first value match value index // 0

// console.log(arrayOfstr.lastIndexOf('p')) // 3, last value match index // 3


// arrayOfstr.forEach(ele1 => {

//     if(arrayOfstr.indexOf(ele1) !== arrayOfstr.lastIndexOf(ele1)) {

//         duplicates.push(ele1)

//     }


// });


// const array = [1,5,2,3,0,7,9]

// console.log(array.sort((a,b)  => a - b)) // ascending

// console.log(array.sort((a,b)  => b - a)) // descending


// const array = ['s','a']

// console.log(array.sort())

function multiply(a,b,c) {

   console.log( a*b*c ,"multiply")
}

multiply(1,2,3)


// div ---- html --- geteleid ---- .style.backgroudcolor = 'red'