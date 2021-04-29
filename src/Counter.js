import { useState } from 'react'

const Counter = ({ initial = 0 }) => {
  const [counter, setCounter] = useState(initial)

  const handleCounter = () => {
    setCounter(prev => {
      console.log(prev)
      return prev + 1
    })
  }

  return (
    <div>
      <span>Contador: {counter}</span>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button
          onClick={() =>
            setCounter(prev => {
              if (prev === 0) {
                return prev
              }

              return prev - 1
            })
          }
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
