import React from 'react';

export default function SearchBox(props) {
    return (
        <form onSubmit={e => props.onSubmit(e)}>
            <label htmlFor="input">Item</label>
             <input id="input"  />  // ref? or controlled input 
            <button >Add</button>
        </form>
    )
}