import React, { Component } from 'react';
import { getMyLibrary } from '../services/dataService';

class ShelfDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.shelfIndex
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shelfIndex !== this.state.value) {
            this.setState({ value: nextProps.shelfIndex });
        }
    }

    renderOption = () => {
        const myLib = getMyLibrary();
        return myLib.shelves.map((shelf, i) => <option key={i} value={i}>{shelf.name}</option>)
    }
    
    onChangeHandle = event => {
        if (event.target.value === "-1") {
            return;
        }
        this.setState({ value: event.target.value });
        this.props.onChangeShelf(event.target.value);
    }
    
    render() {
        return (
            <select value={this.state.value} onChange={this.onChangeHandle}>
                <option value="-1" style={{color: 'grey'}}>Move to</option>
                {this.renderOption()}
            </select>
        );
    }
}

export default ShelfDropdown;