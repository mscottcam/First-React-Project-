import React from 'react';

export default function List(props) {
  const items = props.items.map((item, index) => {
    return (
      <li key={index}>
        {item}
      </li>
    )
  })

  return (
    <ul>
      {items}
    </ul>
  )
}