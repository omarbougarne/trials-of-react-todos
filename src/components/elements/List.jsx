import React from 'react'

export default function List({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.text}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}


