import React from 'react'

export default function Input({value, onChange}) {
  return (
    <div>
      <input value={value} onChange={onChange}/>
    </div>
  )
}
