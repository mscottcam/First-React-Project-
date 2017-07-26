import React from 'react'

export default function searchBox(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="input">Item</label>
            <input id="input" />
            <button>Add</button>
        </form>
    )
}