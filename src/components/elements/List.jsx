import React from 'react'


export default function List({ items, onDelete, onToggle }) {
  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <li key={index} className={item.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
          />
          <span className="todo-text">{item.text}</span>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}


