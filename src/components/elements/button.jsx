import React from 'react'

export default function Button({text, onClick, type}) {
  return (
    <div>
      <button className={`btn btn-${type}`} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}
