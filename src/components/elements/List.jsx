import React from 'react'
import Input from './input'
import Button from './button'


export default function List({ 
  items, 
  onDelete, 
  onToggle, 
  onEdit, 
  editingId, 
  editValue, 
  setEditValue,
  saveEdit,
  cancelEdit }) {
  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <li key={index} className={item.completed ? 'completed' : ''}>
          {editingId === item.id ? (
            <div className='edit-form'>
              <Input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <Button text="Save" onClick={saveEdit} />
              <Button text="Cancel" onClick={cancelEdit} />
            </div>
          ) : (
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggle(item.id)}
            />

          )}
          <span className="todo-text">{item.text}</span>
          <button text="Edit"onClick={() => onEdit(item.id, item.text)}/>
          <button text="Delete" onClick={() => onDelete(item.id)}/>
        </li>
      ))}
    </ul>
  )
}


