import * as booksData from '../assets/data.json';

let data = booksData.default;

export const getWholeData = () => {
    return data;
}

export const getMyLibrary = () => {
    return data.myLibrary;
}

export const setData = (result) => {
    data = result;
}

export const shiftBook = (book, bookIndex, currentShelfIndex, newShelfIndex) => {
    data.myLibrary.shelves[newShelfIndex].books.push(book);
    if (currentShelfIndex !== "-1") {
        data.myLibrary.shelves[currentShelfIndex].books.splice(bookIndex, 1);
    } else {
        bookIndex = data.books.findIndex(v => v.id === book.id);
        data.books.splice(bookIndex, 1);
    }
}