import { useState } from 'react'

const Bulb = () => {
  const [isOn, setIsOn] = useState('OFF')

  const handleBulb = () => {
    if (isOn === 'OFF') {
      setIsOn('ON')

      return
    }
    setIsOn('OFF')
  }

  return (
    <div>
      <p>La bombilla esta prendida: {isOn}</p>
      <button onClick={handleBulb}>SWITCH</button>
    </div>
  )
}

export default Bulb
