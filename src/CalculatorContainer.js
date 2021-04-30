import Input from './Input'
import { useState } from 'react'

const CalculatorContainer = () => {
  const [degrees, setDegrees] = useState(0)
  const [radians, setRadians] = useState(0)

  //   const toGrades = e => {
  //   setRadians(e.target.value * 57.296)
  //   setGrades(e.target.value)
  // }

  // const toRadian = e => {
  //   setGrades(e.target.value * 0.01745)
  //   setRadians(e.target.value)
  // }

  const handleDegrees = e => {
    console.log(e)
    setDegrees(e)
    setRadians(e * 0.01745)
  }

  const handleRadians = e => {
    setRadians(e)
    setDegrees(e * 57.296)
  }

  return (
    <div>
      Contenedor
      <div>
        <h6>Grados:</h6>
        <Input value={degrees} setValue={handleDegrees} />
        <h6>Radianes:</h6>
        <Input value={radians} setValue={handleRadians} />
      </div>
    </div>
  )
}

export default CalculatorContainer
