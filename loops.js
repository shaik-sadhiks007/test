
// loops ---- for

// if(condition)

// for(start, end(condition), increment) {

//     // code to execute

// }

// 1 - 10


//  i++ ====> i=i+1

const arr = [11, 12, 13, 14, 15, 16, 17] // even numbers


const key = 15


// break ---- after finding, i won't run the loop again



for (let i = 0; i < arr.length; i++) {

    // console.log(` ${i} : ${arr[i]} `) // template literals -- string literals

    // console.log(i, ':', arr[i])

    // if(key == arr[i]) {

    //     console.log('we got the key 15')

    //     continue; // is used to skip one iteration (one cycle)

    // }



    console.log(i + ':' + arr[i])


}

// normal functions


// function getArray() {

//     console.log("getArray function is running");

//     return "sadhik dfafas"

// }

// getArray() // fun call

// const aa = getArray()


// // arrow function ----- let funname = () => {}


// var arrowFun = (adadfsdf) => {

//     console.log("getArray function is running");

//     return adadfsdf

// }


// console.log(arrowFun("hello world"), "arrow fun")


// console.log(aa, "aaa")


// forEach -- camel case ---- arr.forEach(  (element, index) => {}   )



// arr.forEach(


//     (ele,index) => {

//         console.log(ele,index)

//     }


// )


const newarrofForeach = arr.forEach(


    (ele, i) => {

        // if(i == 3) {
        //     break ;  // we will get error here
        // }

        // console.log( i , ele,"foreach")

        return ele * 2



    }

)

console.log(newarrofForeach, 'foreach modifying')


// diff b/w for and forEach, map , filter --

// 1. we have to assign variable in forloop, and we have to give element manually

// 1. we will get element and index automatically

// 1. we can create a new array and assign the new values to variable


// 2. in for loop we can use break and continue
// 2. in forEach we can't use it 




/// map function will be used for modifying the array and assaigning it to create a array


//  const newarr2Map = arr.map(


//     (ele, i) => {

//         // if(i == 3) {
//         //     break ;  // we will get error here
//         // }

//         console.log( i , ele,"map")

//         return ele * 2

//     }

// )

// console.log(newarr2Map,"MAP is modifying")



// const output = arr.filter(

//     (ele,index ) => {

//         return ele % 2 == 0 

//     }

// )

// console.log(output,'output of filter')



// const x = [1,2,3,4]

// // updation and reassigning

// x = [5,6,7,8]

// // y = 6 // reassigning


// const y = 9

// y = 10

// x.push(7)

// console.log(x,"x")


let newForloopArr = []


for (let i = 0; i < arr.length; i++) {

    if(arr[i] % 2 == 0 ) {
        newForloopArr.push(arr[i])
    }

}


console.log(newForloopArr,'newForloopArr')







console.log('this is end of js')