const arraybook = [];
let main$$ = document.querySelector("main")
let section$$ = document.createElement("section")
const input$$ = document.getElementsByClassName("searchingbar")
main$$.appendChild(section$$)
const getAllBooks = async () =>{
        const arraybook = []
        const response = await fetch(`http://localhost:5051/book`,{method:"GET"});
        const result = await response.json();    
        // console.log(result)
            arraybook.push(result);
    //   console.log(arraybook);
    return arraybook;
}

// const mapBooks = (arraybook)=>{
//     // console.log(arraybook)
//     return arraybook.map((results)=>({
//         title: results.title,
//         image: results.image,
//         author: results.author,
//         genre: results.genre,
//         year: results.year
//     }))
// }

    const printBooks = (books) =>{
        // console.log(books)
        for(const drawbooks of books){
            for (const drawingbooks of drawbooks) {
                console.log(drawingbooks)
                const booksDiv$$ = document.createElement("div")
                booksDiv$$.innerHTML=`
                <img src="${drawingbooks.image}" alt="${drawingbooks.title}">
                <h2>${drawingbooks.title}</h2>
                `;
                section$$.appendChild(booksDiv$$);
            }
        }
    }
const useInput = (books) => {
    input$$.addEventListener("input", () =>searchBooks(input$$.value, filteredBooks))
}
const searchBooks = (filtro, books) =>{
    let filteredBooks = books.filter((books)=>books.name.toLowercase().includes(filtro.toLowercase()))
    printBooks(filteredBooks);
}
const init = async ()=>{
    const books = await getAllBooks();
    // const mapingBooks = mapBooks(books); 
    // console.log(mapingBooks);
    printBooks(books);
    // console.log(books)
}
init();