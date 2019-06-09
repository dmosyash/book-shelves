import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import ShelfDropdown from './ShelfDropdown';

/**
 * @constant Book
 */

const style = {
    height: '250px',
    textAlign: 'center'
}

const Book = ({ shiftBook, shelfIndex, bookDetails, index }) => {
    return (
        <Col xs={12} md={3} style={style}>
            <Image style={{ width: '125px', height: '175px' }}
                src={bookDetails.thumbnail}
                alt={bookDetails.title}
                thumbnail
            />
            <h6 style={{height: "40px"}}>{bookDetails.title}</h6>
            <ShelfDropdown 
                shelfIndex={shelfIndex}
                onChangeShelf={(newShelfIndex) => shiftBook(bookDetails, index, shelfIndex, newShelfIndex)}
            />
        </Col>
    );
}

export default Book;