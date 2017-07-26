import React from 'react';
import SearchBox from './searchbox';
import List from './list';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // item: '',
            items: []
        }
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(event)
        // this.setState( { item: event.target.value } );
        this.setState( { items: [...this.state.items, event] } );
    }

    render() {
        return (
            <div>
                <SearchBox onSubmit={event => this.onSubmit(event)} />
                <List items={this.state.items} />
            </div>
        )
    }
}