import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Shelf from '../components/Shelf';
import { getMyLibrary, shiftBook } from '../services/dataService';

/**
 * @class MyLibrary
 * @description MyLibrary is a Container which get popular movies from API called in componentDidMount 
 * and changing state so movies will get render.
 * State of this Container is Movie List
 * Grid is used to show the movie list.
 * It has pagination too at bottom of the container.
 */

class MyLibrary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: getMyLibrary()
        };
    }

    componentDidMount() {
        this.setState({ data: getMyLibrary() });
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

