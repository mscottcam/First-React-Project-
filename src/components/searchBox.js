import React from 'react';

// export default function SearchBox(props) {
//     return (
//         <form name="calc" onSubmit={e => props.onSubmit(e)}>
//             <label htmlFor="input">Item</label>
//              <input onChange={e => props.onChange(e)} id="input" name="input" /> 
//             <button type="submit">Add</button>
//         </form>
//     )
// }

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input
        }
    }

    render() {
        return (
            <form name="calc" onSubmit={e => props.onSubmit(e)}>
                <label htmlFor="input">Item</label>
                <input ref={input => this.state.input = input} onChange={e => props.onChange(e)} id="input" name="input" />
                <button type="submit">Add</button>
            </form>
        )
    }
    
}