import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Shelf from '../components/Shelf';
import { getMyLibrary, shiftBook } from '../services/dataService';

/**
 * @class MyLibrary
 * @description MyLibrary is a Container which get all the books of the Library
 * State of this Container is has data property which contains library data.
 * Grid is used to show the book list in different shelves.
 */

class MyLibrary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: getMyLibrary()
        };
    }

    shiftLibraryBook = (book, bookIndex, currentShelfIndex, newShelfIndex) => {
        shiftBook(book, bookIndex, currentShelfIndex, newShelfIndex)
        this.setState({ data: getMyLibrary() });
    }

    renderShelves = () => (this.state.data.shelves.map((shelf, i) => <Shelf key={i} index={i} shelfDetails={shelf} shiftBook={this.shiftLibraryBook} />));

    render() {
        return (
            <Grid>
                <Row>
                    <h1>My Library</h1>
                </Row>
                <br/>
                {this.renderShelves()}
            </Grid>
        )
    }
}

export default MyLibrary;

