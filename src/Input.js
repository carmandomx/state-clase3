import { useState } from 'react'

// Componente Presentacional
const Input = ({ value, setValue }) => {
  return (
    <div
      style={{
        paddingBottom: '16px'
      }}
    >
      <input
        onChange={evento => {
          setValue(evento.target.value)
        }}
        type='number'
        value={value}
      />
      <button onClick={() => setValue(1993)}>Modificar valor</button>
    </div>
  )
}

export default Input
