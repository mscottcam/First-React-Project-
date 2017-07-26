import React from 'react';
import SearchBox from './searchBox';
import ListItem from './listItem'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    render() {
        return(
            <SearchBox />
        )
    }
}