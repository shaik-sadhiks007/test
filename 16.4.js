const str = 'hello';

const arr = str.split('')

const target = 'l';

let count = 0;

// arr.forEach((ele, index) => {


// if (ele == target) {

//     console.log(ele)
//     count = count + 1
// }


// })


// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] == target) {
//         count = count + 1

//         console.log(count,"count")
//     }
// }
// console.log(count, 'target')

const array = [1,9,8]

// spread operator --- if u want to copy the inner data you have to use three dots


// console.log(Math.max(...array));

// console.log(Math.min(1,9,-8));


// a function calling a function known as callback function

// array.forEach( (ele,index) => {
//     console.log(ele)
// })

// 19.2 

function getUserData(fun){

    const data = 5;

    fun(data)

    // second(5)
    
}


function second(data) {

    console.log(data,"this is second function")
}


getUserData(second)


// const arr2 = [10,20,32,66]

// const filteredData = arr2.filter((ele,index) => {
//     return ele > 20
// })

// console.log(filteredData[0])


// const arr2 = [10,20,32,66]

// // find is also a filter which will give first match of the condition

// const filteredData = arr2.find((ele,index) => {
//     return ele > 20
// })

// console.log(filteredData)

const arr2 = [
    {
        id : 1,
        name : 'sadhik'
    },
    {
        id : 2,
        name : 'hemanth'
    }
]

const target2 = 2


// find is also a filter which will give first match of the condition

// const filteredData = arr2.find((ele,index) => {
//     return ele > 20
// })


const filteredData = arr2.filter((ele,index) => {
    return ele.id == target
})

console.log(filteredData)


class Book {

    // constructor(a) {
    //     this.a = a
    // }

    // var a= 5


    getData(tyofpages,author,) {


        // this property make the variable global

        this.a = tyofpages

        this.b = author

        console.log(this.a,this.b)

    }

    type_of_book() {


        // console.log(pages,tyofpages,author)

        console.log(this.a,this.b,"a variable")

        console.log('hi this book class')
    }

}

const myBook = new Book(5)

myBook.getData(100,'sadhik')

myBook.type_of_book()


