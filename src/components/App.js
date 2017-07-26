import React from 'react';
import SearchBox from './searchbox';
import List from './list';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            items: []
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState( {items: [...this.state.items, this.state.item] });
        e.target.reset();
    }

    onChange(e) {
        this.setState({item: e.target.value})
    }

    render() {
        return (
            <div>
                <SearchBox onChange={e => this.onChange(e)} onSubmit={e => this.onSubmit(e)} />
                <List items={this.state.items} />
            </div>
        )
    }
}