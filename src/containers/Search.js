import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Book from '../components/Book';
import { getWholeData, shiftBook } from '../services/dataService';

/**
 * @class Search
 * @description Search is a Container which get all the books related to the Search Text.
 * It compares the book title with the search text.
 */

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            result: []
        }
        this.timer = null;
    }

    searchBooks = () => {
        const { searchText } = this.state;
        const data = getWholeData();
        let bookList = [];
        data.myLibrary.shelves.forEach((shelf, index) => {
            for (let i = 0; i < shelf.books.length; i++) {
                const bookTitle = shelf.books[i].title.toLowerCase();
                if (bookTitle.indexOf(searchText) !== -1) {
                    shelf.books[i].shelfIndex = index;
                    shelf.books[i].bookIndex = i;
                    bookList.push(shelf.books[i]);
                }
            }
        });
        data.books.forEach(book => {
            const bookTitle = book.title.toLowerCase();
            if (bookTitle.indexOf(searchText) !== -1) {
                book.shelfIndex = "-1";
                bookList.push(book);
            }
        });
        this.showResult(bookList);
    }

    handleChange = event => {
        this.setState({ searchText: event.target.value });
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.timer = setTimeout(() => {
            this.searchBooks();
        }, 300);
    }

    showResult = list => {
        let result = list.map((book, i) => <Book key={i} shelfIndex={book.shelfIndex} shiftBook={shiftBook} bookDetails={book} index={book.bookIndex} />);
        this.setState({ result });
    }

    render() {
        return (
            <div>
                <h1>Search Books</h1>
                <input type="text"
                    placeholder="Search..."
                    value={this.state.searchText}
                    onChange={this.handleChange}
                />
                <Grid>
                    <Row>
                        {this.state.result}
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Search;