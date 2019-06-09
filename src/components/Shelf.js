import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Book from './Book';

/**
 * @constant Shelf
 */


const renderBooks = (data, shelfIndex, shiftBook) => {
    return data.books.map((book, i) => <Book key={i} shelfIndex={shelfIndex} shiftBook={shiftBook} bookDetails={book} index={i}/>)
}

const Shelf = ({ shiftBook, shelfDetails, index }) => (
    <Row>
        <h3 style={{display:"block"}}>{shelfDetails.name}</h3>
        { renderBooks(shelfDetails, index, shiftBook) }
    </Row>
);

export default Shelf;


