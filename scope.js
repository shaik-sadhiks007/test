console.log('scope file is running');

// 4 scopes in the js 

// scope --- accessing of variable

// 1. global scope --- not using function or block , then it is a global scope

let a = 5

function name() {
    console.log(a, 'accessed in function')
}


if (true) {

    // other than function where you are using curly braces known as block such as for, if , else etc
    console.log(a, "accessed in block")

}

console.log(a,'out of all b and f ')


name()

// 2. function scope ------ we can access variable within functions


function example() {

    let ex = 'sadhik'
    console.log(ex, "ex in f")

}


example()

console.log(ex, 'ex in outside');



// 3. block scope ----- 

// block --- piece of code

// if (true) {

//     let ex = 'sadhik'
//     console.log(ex, "ex in b")

// }


// console.log(ex, 'ex in outside');


// 4. lexical scope ---- accessing variable in nested functions

// function outer(age) {

//     let outervariable = 'good'

//     let badvariable = 'bad'

//     function inner() {

//         console.log(`sadhik is ${outervariable} person`)

//     }

//     function inner2() {
//         console.log(`sadhik is ${badvariable} person`)
//     }

//     if (age > 18) {

//         inner()

//     } else {

//         inner2()

//     }

//     console.log(outervariable, "adfas")

// }


// outer(10)

