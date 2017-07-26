import React from 'react'

export default function SearchBox(props) {
    return (
        <form onSubmit={e => props.onSubmit(e.target.value)}>
            <label htmlFor="input">Item</label>
            <input id="input"  />
            <button >Add</button>
        </form>
    )
}