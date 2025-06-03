

// class Book {


//     type_of_book(author,pages) {

//         this.author = author;
//         this.pages = pages

//         console.log('this is function')
//         console.log(`author is ${this.author} and pages are ${this.pages}`)

//     }

//     anotherfun() {
//         console.log('author in another function',this.author)
//     }


// }

// let bookObj = new Book()

// bookObj.type_of_book("sadhik", 300)

// bookObj.anotherfun()


// function a(author) {

//     let b = author

//     console.log(b,"aut")

// }

// console.log(b,'b')

// a("hemanth")

// var is a functional scope

// let and const are block --- {}


function username(){

    var a = 5 ; 
    
    console.log(a,"function scope")

    if(true) {

        var b = 20;

        let c = 30;

        const d = 40

        console.log(c,'inner blick')
    }

    console.log(b,"b")

    console.log(c,"c")

    console.log(d,'d')


}

username()



