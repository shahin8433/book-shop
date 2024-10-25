export const getBooksFromLocalStorage=()=>{
const books = localStorage.getItem('books');
return JSON.parse(books) || [];
}